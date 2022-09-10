import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allPokemons from "../store/actions";
import { Loading } from "../pages/Loading";
import Pokemon from "./Pokemon";
import { useCallback } from "react";

const Pokemons = () => {
  const listPokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const loadPokemons = useCallback(async() => await dispatch(allPokemons()), [dispatch]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <>
      <div className="containPokemons">
        {listPokemons.length === 0
          ? Loading(true)
          : listPokemons.map((poke) => (
              <Pokemon
                key={poke.name}
                name={poke.name}
                img={poke.img}
                Types={poke.Types}
              />
            ))}
      </div>
    </>
  );
};

export default Pokemons;
