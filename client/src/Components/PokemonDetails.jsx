import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../store/actions";
import ReadingPoke from "../services/ReadingDetails";

const PokemonDetails = () => {
  const { id } = useParams();
  const listPokemons = useSelector((state) => state.detailsPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDetails(id));
  }, []);

  const handleclick=async()=>{
    await dispatch(getPokemonDetails(null));
  }

  const speachStats=()=> ReadingPoke(`Pokemon ${listPokemons.name}, Tipo ${listPokemons?.Types}, con un nivel de Ataque de ${listPokemons.attack} y defensa de ${listPokemons.defense} `);
  
  return (
    <div>
      <div className="pokemon-name-detail">
        <h1>{listPokemons.name}</h1>
      </div>
      <div className="pokemon-img-detail">
        <img
          src={listPokemons.img}
          alt={listPokemons.name}
          className="pokemon-img"
          onClick={()=>speachStats()}
        />
      </div>
      <div className="pokemon-card-detail">
        <div>
          <h3>HP: {listPokemons.hp}</h3>
        </div>
        <div>
          <h3>Attack: {listPokemons.attack}</h3>
        </div>
        <div>
          <h3>Defense: {listPokemons.defense}</h3>
        </div>
        <div>
          <h3>Weight: {listPokemons.weight}</h3>
        </div>
        <div>
          <h3>Height: {listPokemons.height}</h3>
        </div>
        <div>
          Type:{" "}
          {listPokemons.Types?.map((t) => (
            <span key={t}> {t} </span>
          ))}
        </div>
        <button >
          <NavLink
            exact
            to={"/home"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            onClick={()=>handleclick()}
          >
            Regresar
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
