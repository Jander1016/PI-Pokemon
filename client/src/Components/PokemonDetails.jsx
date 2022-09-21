import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../store/actions";
import ReadingPoke from "../helpers/ReadingDetails";
import '../styles/styleDetailsPoke.css'

const PokemonDetails = () => {
  const { id } = useParams();
  const listPokemons = useSelector((state) => state.detailsPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDetails(id));
  }, []);

 
  const speachStats = () =>
    ReadingPoke(
      `Pokemon ${listPokemons.name}, Tipo ${
        !listPokemons?.Types ? "desconocido" : listPokemons?.Types
      }, con un nivel de Ataque de ${listPokemons.attack} y defensa de ${
        listPokemons.defense
      } `
    );
  return (
    <div className="main-container">
      <div className="pokemon--detail">
        <img
          src={listPokemons.img}
          alt={listPokemons.name}
          className="pokemon-img"
          onClick={() => speachStats()}
        />
      </div>
      <div className="details-stats">

      <div className="pokemon-name-detail">
        <h1>#{listPokemons.id} - {listPokemons.name}</h1>
      </div>
      <div className="card__detail">
        <div>
          <h3>HP: {listPokemons.hp}</h3>
        </div>
        <div>
          <h3>Speed: {listPokemons.speed}</h3>
        </div>
      </div>
      <div className="card__detail">
        <div>
          <h3>Attack: {listPokemons.attack}</h3>
        </div>
        <div>
          <h3>Defense: {listPokemons.defense}</h3>
        </div>
      </div>
      <div className="card__detail">
        <div>
          <h3>Weight: {listPokemons.weight}</h3>
        </div>
        <div>
          <h3>Height: {listPokemons.height}</h3>
        </div>
      </div>
      <div className="card__detail">
        <div>
          <b>Type:</b>
          {(typeof listPokemons.id === 'string')
          ?listPokemons.Types?.map((t,i) => (<span key={i}> <b>{t.name}</b> </span>))
          :listPokemons.Types?.map((t,i) => (<span key={i}> <b>{t}</b> </span>))
          }
        </div>
        
          
      </div>
      <div className="button__detail">
          <button>
          <NavLink
            exact
            to={"/home"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
            className="button__detail_link"
          >
            Back
          </NavLink>
        </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
