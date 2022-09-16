import { NavLink } from "react-router-dom";
import not from "../images/error404.jpeg";

const NotFound = () => {
  return (
    <>
      <div className="ErrorImage">
        <img src={not} alt="pokeError" />
      </div>
      <button className="hero__cta">
        <NavLink
          exact
          to={"/home"}
          activeStyle={{ fontWeight: "bold", color: "blue" }}
          className="hero__cta__link"
        >
          Back to Home!!
        </NavLink>
      </button>
    </>
  );
};

export default NotFound;
