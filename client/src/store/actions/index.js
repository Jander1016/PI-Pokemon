import axios from 'axios'

export const ALL_POKEMONS = "ALL_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS";

const getBackPokemons = async() => axios.get('http://localhost:3001/pokemons/')


export default function allPokemons() {
  return  (dispatch) =>{
    getBackPokemons()
    .then((pokes) => {
        dispatch({ type: ALL_POKEMONS, payload: pokes })
    })
    .catch(error => console.log(error))
  };
}
  
export function createPokemons(info) {
  return ({
          type: CREATE_POKEMONS,
          payload: info,
        })
}



