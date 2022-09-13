import { NavLink } from "react-router-dom";
import pokemon6to from "../images/pokemon6to.jpeg";
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
        <img src={pokemon6to} alt="pokeBack" />
      </div>
    </div>
  );
};

export default Landing;
