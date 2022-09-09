const axios = require("axios");
const { Pokemon, Type } = require("../database/db");

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
  const listPokeAxios = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40",);
  const listURLs = listPokeAxios.data.results;

  let pokes = [];
  await axios.all(
    listURLs.map((p) => {
      return axios.get(p.url).then((poke) =>
        pokes.push({
          id: poke.data.id,
          name: poke.data.name,
          hp: poke.data.stats[0].base_stat,
          attack: poke.data.stats[1].base_stat,
          defense: poke.data.stats[2].base_stat,
          speed: poke.data.stats[5].base_stat,
          height: poke.data.height,
          weight: poke.data.weight,
          img: poke.data.sprites.other.home.front_default,
          Types: poke.data.types.map((t) => t.type.name),
        })
      );
    })
  );
  pokes.sort((a,b)=> a.id - b.id)
  return pokes;
};

const listAllPokemonsDb = async () => {
  return await Pokemon.findAll({ include: Type });
};

const getByIdPokemon = async (idPokemon) => {
  try {
    let pokemonFound = "";
    if (!idPokemon) throw error("Not found!");
    if (idPokemon.length > 16) {
      pokemonFound = await Pokemon.findByPk(idPokemon);
    } else {
      pokemonFound = await findPokemonApi(Number(idPokemon));
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
  img
) => {
  try {
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
      let findType = await Type.findOne({ where: { name: tp } });
      if (!findType) await Type.create({ name: tp });
    }
    
    const allTypesdb = await Type.findAll();
    return allTypesdb;
  } catch (error) {
    console.log(error.message);
  }
}


module.exports = {
  findPokemonApi,
  findPokemonDb,
  listAllPokemonsApi,
  listAllPokemonsDb,
  getByIdPokemon,
  createPokemon,
  getAllTypes
};
