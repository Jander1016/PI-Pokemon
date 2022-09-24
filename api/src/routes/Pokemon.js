const { Router } = require("express");
const apicache= require('apicache')
const { getAllPokemons, getByIdPokemon, createPokemon, getAllTypes} = require('../controllers/pokemonController')

const router = Router();
const cache= apicache.middleware;
// ,cache("2 minutes")
router
  .get("/pokemons",cache("2 minutes"), getAllPokemons)
  .get("/pokemons/:idPokemon", getByIdPokemon)
  .post("/pokemons", createPokemon)
  .get("/types", getAllTypes)

module.exports = router;
