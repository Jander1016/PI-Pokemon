import { memo } from "react";
import { Link } from "react-router-dom";

const Pokemon = memo(({ id, name, img, Types }) => {
  return (
    <div>
      {<div className="pokemon-card">
          <div className="pokemon-img-container">
            <Link className="Link" to={`/pokeDetails/${id}`}>
              <img src={img} alt={name} className="pokemon-img" />
            </Link >
          </div>
          <div className="pokemon-name">
              <h3>{name}</h3>
          </div>
          <div className="pokemon-type">
            Type:
            {Types.map((t) => (<span key={t} className="pokemon-type-text">  {t} </span>))}
          </div>
        </div>
      }
    </div>
  );
});
export default Pokemon;
