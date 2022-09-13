import {ALL_POKEMONS, CREATE_POKEMONS, CREATE_POKEMONTYPES, SEARCH_POKEMON, DETAILS_POKEMON} from '../actions'

const initialSatate={
    pokemons: [],
    createPokemons:[],
    createPokemonTypes:[],
    searchPokemon:[],
    detailsPokemon:[],
    filteredPokemons: []
}

export default function reducer(state=initialSatate, action){
    switch (action.type) {
        case ALL_POKEMONS:
            return {
            ...state,
            pokemons: action.payload.data
        }  
        case DETAILS_POKEMON:
            return {
            ...state,
            detailsPokemon: action.payload.data
        } 
        case CREATE_POKEMONS:
            return {
            ...state,
            createPokemons: [...state.createPokemons, action.payload]
        }    
        case CREATE_POKEMONTYPES:
            return {
            ...state,
            createPokemonTypes: [...state.createPokemonTypes, action.payload]
        }  
        case SEARCH_POKEMON:
            return {
            ...state,
            searchPokemon: action.payload.data
        } 
        default:    
            return state;
    }
}