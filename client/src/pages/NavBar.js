import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="container__menu">
      <div className='logoNav'>
        <div><img src={imgUrl} alt="pokeapi-logo" className="navbar-image" /></div>
        <div><SearchBar /> </div>
      </div>
      <div className="menu">
        <nav>
          <NavLink
            exact
            to={"/home"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Home
          </NavLink>

          <NavLink
            exact
            to={"/create"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Create Pokemon
          </NavLink>

          <NavLink
            exact
            to={"/about"}
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
