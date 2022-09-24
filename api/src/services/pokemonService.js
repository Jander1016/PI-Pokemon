const axios = require("axios");
const { Pokemon, Type } = require("../database/db");

let DATA_API_DB = [];

const findPokemonApi = async (pokeParam) => {
  try {
    const listpokes = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + pokeParam
    );
    return {
      id: listpokes.data.id,
      name: listpokes.data.name,
      hp: listpokes.data.stats[0].base_stat,
      attack: listpokes.data.stats[1].base_stat,
      defense: listpokes.data.stats[2].base_stat,
      speed: listpokes.data.stats[5].base_stat,
      height: listpokes.data.height,
      weight: listpokes.data.weight,
      img: listpokes.data.sprites.other.home.front_default,
      Types: listpokes.data.types.map((t) => t.type.name),
    };
  } catch (error) {
    console.log(error.message);
  }
};

const findPokemonDb = async (pokeParam) => {
  try {
    const findPokeDb = await Pokemon.findOne({
      where: { name: pokeParam.toLowerCase() },
    });
    return findPokeDb;
  } catch (error) {
    console.log(error.message);
  }
};

const listAllPokemonsApi = async () => {
  try {
    const listPokeAxios = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );
    let allPokes = [];
    await Promise.all(
      listPokeAxios.data.results.map((item) => {
        const itemsUrl = item.url.split("/");
        const id = itemsUrl[6];
        let poke = findPokemonApi(id)
          .then((p) => allPokes.push(p))
          .catch((e) => {});
        return poke;
      })
    );
    allPokes.sort((a, b) => a.id - b.id);
    return allPokes;
  } catch (error) {
    console.log(error.message);
  }
};

const listAllPokemonsDb = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
};

const listAllPokemonsApiDb = async () => {
  try {
    const listPokeDb = await listAllPokemonsDb();
    const listPokeApi = await listAllPokemonsApi();
    const listData = [...listPokeApi, ...listPokeDb];
    DATA_API_DB = listData;
    return listData;
  } catch (error) {
    console.log(error.message);
  }
};

const getByIdPokemon = async (idPokemon) => {
  try {
    if (!idPokemon) return;
    let pokemonFound = "";
    if (idPokemon.length > 8) {
      pokemonFound = await DATA_API_DB.filter((poke) => poke.id === idPokemon);
    } else {
      pokemonFound = await DATA_API_DB.filter(
        (poke) => poke.id === Number(idPokemon)
      );
    }
    return pokemonFound;
  } catch (error) {
    console.log(error.message);
  }
};

const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  img,
  Types
) => {
  try {
    const existPokeApi = await findPokemonApi(name.toLowerCase());
    const existPokeDb = await findPokemonDb(name.toLowerCase());
    if (existPokeApi && existPokeDb) return error.message;
    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    let typesDb = await Type.findAll({
      where: { name: Types },
    });
    newPokemon.addType(typesDb);
    return newPokemon;
  } catch (error) {
    console.log(error.message);
  }
};

const getAllTypes = async () => {
  try {
    const allTypes = await axios.get("https://pokeapi.co/api/v2/type/");
    const nameTypesApi = allTypes.data.results.map((t) => t.name);

    for (tp of nameTypesApi) {
      await Type.findOrCreate({ where: { name: tp } });
    }

    const allTypesdb = await Type.findAll();
    return allTypesdb;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listAllPokemonsApiDb,
  getByIdPokemon,
  createPokemon,
  getAllTypes,
};
