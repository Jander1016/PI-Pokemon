const { Pokemon, Type } = require("../database/db");
const pokemonService = require('../services/pokemonService')

const getAllPokemons = async (req, res, next) => {
  try {
    const { name } = req.query;

    if (name) {
      let pokeName = await pokemonService.findPokemonDb(name);
      if (pokeName === null) pokeName = await pokemonService.findPokemonApi(name);
      res.send(pokeName);
    } else {
      const listPokeDb = await pokemonService.listAllPokemonsDb();
      const listPokeApi = await pokemonService.listAllPokemonsApi();
      const listPokemonsAll = [...listPokeApi, ...listPokeDb];
      res.send(listPokemonsAll);
    }
  } catch (error) {
    next(error);
  }
};

const getByIdPokemon = async (req, res, next) => {
  try {
    const { idPokemon } = req.params;
    const pokemonFoundId= await pokemonService.getByIdPokemon(idPokemon)
    res.send(pokemonFoundId);
  } catch (error) {
    next(error);
  }
};

const createPokemon = async (req, res, next) => {
  try {
    let { name, hp, attack, defense, speed, height, weight, img } = req.body;
    if(!name || !hp || !attack || !defense || !speed || !height || !weight )return
    if(!img)img = 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_pokemonbrilliantdiamondshiningpearl/bd_dialga.png'
    const newPokemon = await pokemonService.createPokemon(name, hp, attack, defense, speed, height, weight, img)
    !newPokemon? res.status(406).send('Pokemon is already registered'): res.status(201).send(newPokemon);
  } catch (error) {
    next(error);
  }
};

const createPokemonType = async (req, res, next) => {
  try {
    const { idPokemon, idType } = req.params;
    const pokemonType = await Pokemon.findByPk(idPokemon);
    await pokemonType.addType(idType);
    res.status(201).send(pokemonType);
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
}

module.exports = {
  getAllPokemons,
  getByIdPokemon,
  createPokemon,
  createPokemonType,
  getAllTypes
};
