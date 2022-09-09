import { NavLink } from "react-router-dom";

export const NavBar = () => {

  return (
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
  );
};
