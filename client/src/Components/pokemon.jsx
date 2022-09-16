import { memo } from "react";
import { Link } from "react-router-dom";

const Pokemon = memo(({ id, name, img, Types }) => {
  return (
    <div>
      {<div className="pokemon-card">
          <div className="pokemon-img-container">
            <Link className="Link" to={`/pokemons/${id}`}>
              <img src={img} alt={name} className="pokemon-img" />
            </Link >
          </div>
          <div className="pokemon-name">
              <h3>{name}</h3>
          </div>
          <div className="pokemon-type">
            Type:
            {(id.length > 12)
          ?Types?.map((t,i) => (<span key={i}> <b>{t.name}</b> </span>))
          :Types?.map((t,i) => (<span key={i}> <b>{t}</b> </span>))
          }
          </div>
        </div>
      }
    </div>
  );
});
export default Pokemon;
