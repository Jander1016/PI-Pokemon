import { NavLink } from "react-router-dom";
import pika from "../images/pika.gif";
import "../styles/styleLanding.css";
import UseApiPokemon from "../helpers/PokemonService";

export const NavBarV = () => {
  UseApiPokemon();
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div className="hero">
      <div className="container__logo">
        <img src={imgUrl} alt="pokeapi-logo" className="nav__logo" />
      </div>

      <section className="hero__main container">
        <div className="hero__texts">
          <h1 className="hero__title">Hello! My name is Jander</h1>
          <p className="hero__subtittle">
            I developed this project for you, enjoyment!!
          </p>
          <p className="hero__subtittle">
            <a
              href="https://www.linkedin.com/in/jander-gomez-barrueta-8091811a3/"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on LinkedIn
            </a>
          </p>
          <br></br>
          <button className="hero__cta">
            <NavLink
              exact
              to={"/home"}
              activeStyle={{ fontWeight: "bold", color: "blue" }}
              className="hero__cta__link"
            >
              Join us!!
            </NavLink>
          </button>
        </div>
        <figure className="hero__picture">
          <img src={pika} alt="background-pikabchu" className="hero__img" />
        </figure>
      </section>
    </div>
  );
};
