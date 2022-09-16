import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import menu from "../images/menu.svg";

export const NavBar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="menu">
      <nav className="nav__principal container">
        <img src={imgUrl} alt="pokeapi-logo" className="nav__logo" />
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              exact
              to={"/home"}
              activeStyle={{ fontWeight: "bold", color: "blue" }}
              className="nav__Link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              to={"/create"}
              activeStyle={{ fontWeight: "bold", color: "blue" }}
              className="nav__Link"
            >
              Create Pokemon
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              to={"/about"}
              activeStyle={{ fontWeight: "bold", color: "blue" }}
              className="nav__Link"
            >
              About
            </NavLink>
          </li>
        </ul>

        <figure className="nav__menu">
          <img src={menu} alt="menu-icon" className="nav__icon" />
        </figure>
      </nav>
      
      
    </div>
  );
};
