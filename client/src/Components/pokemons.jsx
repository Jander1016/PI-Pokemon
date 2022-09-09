import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseApiPokemon from "../services/pokemonService";
import allPokemons from "../store/actions";
import { Loading } from "../pages/Loading"
import Pokemon from "./pokemon";

const Pokemons = () => {
 
  const listPokemons=useSelector((state) => state.pokemons)
  const {loading, data}= UseApiPokemon(listPokemons)
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(allPokemons())
  },[dispatch]);
  loading || Loading(true)
  return (
    <div className="containPokemons">
      {loading
      ?Loading(true)
      :data?.map((poke) => (
        <Pokemon key={poke.name} name={poke.name} img={poke.img} Types={poke.Types} />
      ))}
    </div>
  );
};

export default Pokemons;
