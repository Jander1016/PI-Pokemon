const { Pokemon, Type } = require("../database/db");
const pokemonService = require("../services/pokemonService");

const getAllPokemons = async (req, res, next) => {
  try {
    const { name } = req.query;
    let listPokemonsAll = await pokemonService.listAllPokemonsApiDb();
    if (name) {
      let pokeName = listPokemonsAll.filter(
        (poke) => poke.name === name.toLowerCase()
      );
      !pokeName
        ? res.status(404).send("Not found Pokemon")
        : res.status(200).send(pokeName);
    } else {
      res.status(200).send(listPokemonsAll);
    }
  } catch (error) {
    next(error);
  }
};

const getByIdPokemon = async (req, res, next) => {
  try {
    const { idPokemon } = req.params;
    const pokemonFoundId = await pokemonService.getByIdPokemon(idPokemon);
    console.log(pokemonFoundId[0])
    !pokemonFoundId[0]
      ? res.status(404).send("Not found Pokemon")
      : res.status(200).json(pokemonFoundId[0]);
  } catch (error) { 
    next(error);
  }
};

const createPokemon = async (req, res, next) => {
  try {
    let { name, hp, attack, defense, speed, height, weight, img, Types } =
      req.body;
    if (!name || !hp || !attack || !defense || !speed || !height || !weight)
      return;
    if (!img)
      img =
        "https://pa1.narvii.com/6270/1c9f9fe62eb54f768f1ac9494bc0a2cb1a92a5b0_hq.gif";
    const newPokemon = await pokemonService.createPokemon(
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
      Types
    );
    !newPokemon
      ? res.status(406).send("Pokemon is already registered")
      : res.status(201).send(newPokemon);
  } catch (error) {
    next(error);
  }
};

const getAllTypes = async (req, res, next) => {
  try {
    const allTypesdb = await pokemonService.getAllTypes();
    res.json(allTypesdb);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPokemons,
  getByIdPokemon,
  createPokemon,
  getAllTypes,
};
