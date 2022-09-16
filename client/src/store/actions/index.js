import axios from 'axios'

export const ALL_POKEMONS = "ALL_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const CREATE_POKEMONTYPES='CREATE_POKEMONTYPES'
export const SEARCH_POKEMON='SEARCH_POKEMON'
export const DETAILS_POKEMON='DETAILS_POKEMON'
export const FILTER_POKEMONS_ORIGIN='FILTER_POKEMONS_ORIGIN'
export const FILTER_POKEMONS_ATTACK='FILTER_POKEMONS_ATTACK'
export const SORT_POKEMONS='SORT_POKEMONS'

const getBackPokemons = async() => axios.get(`http://localhost:3001/pokemons`)
const getBackOnePokemon = async(param) => axios.get('http://localhost:3001/pokemons?name='+ param)
const getDetailsPokemon = async(param='') => axios.get('http://localhost:3001/pokemons/'+ param)

export default function allPokemons() {
  return  (dispatch) =>{
    getBackPokemons()
    .then((pokes) => {
        dispatch({ type: ALL_POKEMONS, payload: pokes })
    })
    .catch(error => console.log(error))
  };
}

export function getPokemonDetails(param) {
  return  (dispatch) =>{
    getDetailsPokemon(param)
    .then((pokes) => {
        dispatch({ type: DETAILS_POKEMON, payload: pokes })
    })
    .catch(error => console.log(error))
  };
}
  
export function createPokemons(poke) {
  try {
    return {
          type: CREATE_POKEMONS,
          payload: poke
        }
  } catch (error) {
    console.log(error.message())
  }
}

export function createPokemonTypes(info) {
  try {
    return ({
          type: CREATE_POKEMONTYPES,
          payload: info,
        })
  } catch (error) {
    console.log(error.message())
  }
}

export function searchPokemon(param) {
    return  (function(dispatch) {
       getBackOnePokemon(param)
      .then((poke) => {
          dispatch({ type: SEARCH_POKEMON, payload: poke })
      })
      .catch(error => console.log(error))
    })
}

export function filterPokesOrigin(payload) {
  try {
    return ({
          type: FILTER_POKEMONS_ORIGIN,
          payload
        })
  } catch (error) {
    console.log(error.message())
  }
}

export function sortPokesAtack(payload) {
  try {
    return ({
          type: FILTER_POKEMONS_ATTACK,
          payload
        })
  } catch (error) {
    console.log(error.message())
  }
}

export function sortPokemons(payload) {
  try {
    return ({
          type: SORT_POKEMONS,
          payload
        })
  } catch (error) {
    console.log(error.message())
  }
}



