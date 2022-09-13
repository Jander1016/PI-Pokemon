import { NavLink } from "react-router-dom";
import pika from "../images/pika.gif"
import UseApiPokemon from "../services/PokemonService";

const Landing = () => {
  UseApiPokemon();
  return (
    <div className="landingImage">
      <div className="cover">
        <button>
          <NavLink
            exact
            to={"/home"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Home
          </NavLink>
        </button>
        <div className='gif'>
          <img src={pika} alt="pokeBack" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
