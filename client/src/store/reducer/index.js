import {
  ALL_POKEMONS,
  CREATE_POKEMONS,
  GET_TYPES,
  SEARCH_POKEMON,
  DETAILS_POKEMON,
  FILTER_POKEMONS_ORIGIN,
  FILTER_POKEMONS_ATTACK,
  SORT_POKEMONS,
  FILTER_TYPES,
  FILTER_COMBINE,
} from "../actions";

const initialSatate = {
  pokemons: [],
  createPokemons: [],
  typesPokemons: [],
  searchPokemon: [],
  detailsPokemon: [],
  filteredPokemonsOrigin: [],
  dataAllPokemons: [],
};

export default function reducer(state = initialSatate, action) {
  switch (action.type) {
    case ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data,
        dataAllPokemons: action.payload.data,
      };
    case DETAILS_POKEMON:
      return {
        ...state,
        detailsPokemon: action.payload.data,
      };
    case CREATE_POKEMONS:
      return {
        ...state,
        createPokemons: [...state.createPokemons, action.payload],
      };
    case GET_TYPES:
      return {
        ...state,
        typesPokemons: action.payload.data,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload.data,
      };
    case FILTER_POKEMONS_ORIGIN:
      const dataAllPokemons = state.dataAllPokemons;
      const statusFiltered =
        action.payload === "all"
          ? state.dataAllPokemons
          : action.payload === "papi"
          ? dataAllPokemons.filter((poke) => typeof poke.id === "number")
          : dataAllPokemons.filter((poke) => typeof poke.id === "string");

      return {
        ...state,
        pokemons: statusFiltered,
      };
    case FILTER_POKEMONS_ATTACK:
      const dataAllPokemons2 = state.dataAllPokemons;
      const statusFilteredAttack =
        action.payload === "maxAttack"
          ? dataAllPokemons2.sort((previus, next) => {
              if (next.attack > previus.attack) {
                return 1;
              }
              if (next.attack < previus.attack) {
                return -1;
              }
              return 0;
            })
          : action.payload === "minAttack"
          ? dataAllPokemons2.sort((previus, next) => {
              if (previus.attack > next.attack) {
                return 1;
              }
              if (previus.attack < next.attack) {
                return -1;
              }
              return 0;
            })
          : state.dataAllPokemons;

      return {
        ...state,
        pokemons: statusFilteredAttack,
      };
    case SORT_POKEMONS:
      const dataAllPokemons3 = state.dataAllPokemons;
      const statusFilteredSort =
        action.payload === "all"
          ?  state.dataAllPokemons
          : action.payload === "desc"
          ? dataAllPokemons3.sort((previus, next) => {
              if (previus.name < next.name) {
                return 1;
              }
              if (previus.name > next.name) {
                return -1;
              }
              return 0;
            })
          : dataAllPokemons3.sort((previus, next) => {
              if (previus.name > next.name) {
                return 1;
              }
              if (previus.name < next.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: statusFilteredSort,
      };
    case FILTER_TYPES:
      const dataPokemons = state.dataAllPokemons;
      const statusFilteredTypes =
        action.payload === "all"
          ? dataPokemons
          : dataPokemons.filter((poke) => poke.Types.includes(action.payload));

      return {
        ...state,
        pokemons: statusFilteredTypes,
      };
    case FILTER_COMBINE:
      const dataCombinedPokemons = state.dataAllPokemons;
      const statusFilteredCombined = dataCombinedPokemons
        .sort((previus, next) => {
          if (previus.name > next.name) {
            return 1;
          }
          if (previus.name < next.name) {
            return -1;
          }
          return 0;
        })
        .sort((previus, next) => {
          if (previus.attack > next.attack) {
            return 1;
          }
          if (previus.attack < next.attack) {
            return -1;
          }
          return 0;
        })
        .filter((pokes) => pokes.Types === action.payload);
      return {
        ...state,
        pokemons: statusFilteredCombined
      };
    default:
      return state;
  }
}
