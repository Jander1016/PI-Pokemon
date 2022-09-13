import { Loading } from "../pages/Loading";
import Pokemon from "./Pokemon";
import { useSelector } from "react-redux";

const Pokemons = () => {
  
  const listPokemons = useSelector((state) => state.pokemons);

  return (
    <>
      <div className="containPokemons">
        {listPokemons.length === 0
          ? Loading(true)
          : listPokemons?.map((poke) => (
              <Pokemon
                id={poke.id}
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
