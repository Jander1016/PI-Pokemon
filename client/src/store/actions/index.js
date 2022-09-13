import axios from 'axios'

export const ALL_POKEMONS = "ALL_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const CREATE_POKEMONTYPES='CREATE_POKEMONTYPES'
export const SEARCH_POKEMON='SEARCH_POKEMON'
export const DETAILS_POKEMON='DETAILS_POKEMON'

const getBackPokemons = async(limit, offset) => axios.get(`http://localhost:3001/pokemons?limit=${limit}&offset=${offset}`)
const getBackOnePokemon = async(param) => axios.get('http://localhost:3001/pokemons?name='+ param)
const getDetailsPokemon = async(param='') => axios.get('http://localhost:3001/pokemons/'+ param)

export default function allPokemons(limit=12, offset=0) {
  return  (dispatch) =>{
    getBackPokemons(limit, offset)
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



