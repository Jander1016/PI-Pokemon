import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import allPokemons, { getPokemonDetails } from "../store/actions";

const UseApiPokemon = () => {
  const listPokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const loadPokemons = useCallback(
    async () => await dispatch(allPokemons()),
    [dispatch]
  );

  useEffect(() => {
    loadPokemons();
  }, []);

  return listPokemons;
};

export const PokemonDetail=(param) =>{
    const findPokemon = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    const loadPokemons = useCallback(
      async () => await dispatch(getPokemonDetails(param)),
      [dispatch,param]
    );


    useEffect(() => {
      loadPokemons();
    }, [loadPokemons]);

    return findPokemon;
}


export default UseApiPokemon;
