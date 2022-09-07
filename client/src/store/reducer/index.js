import {ALL_POKEMONS, CREATE_POKEMONS} from '../actions'

const initialSatate={
    pokemons: [],
    createPokemons:[],
    filteredPokemons: []
}

export default function reducer(state=initialSatate, action){
    switch (action.type) {
        case ALL_POKEMONS:
            return {
            ...state,
            pokemons: action.payload.data
        }  
        case CREATE_POKEMONS:
            return {
            ...state,
            createPokemons: [...state.createPokemons, action.payload]
        }    
        default:
            return state;
    }
}