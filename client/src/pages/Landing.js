import { NavLink } from "react-router-dom";
import pokemon6to from "../images/pokemon6to.jpeg";

const Landing = () => {
  return (
    <div className="landingImage">
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
  );
};

export default Landing;
