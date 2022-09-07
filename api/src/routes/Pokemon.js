const { Router } = require("express");
const router = Router();
const { getAllPokemons, getByIdPokemon, createPokemon, createPokemonType, getAllTypes} = require('../controllers/pokemonController')

router
  .get("/pokemons", getAllPokemons)
  .get("/pokemons/:idPokemon", getByIdPokemon)
  .post("/pokemons", createPokemon)
  .get("/types", getAllTypes)
  .post("/pokemons/:idPokemon/types/:idType", createPokemonType)

module.exports = router;
