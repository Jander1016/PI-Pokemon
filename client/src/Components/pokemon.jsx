import { memo } from "react";
import { Link } from "react-router-dom";

const Pokemon = memo(({ id, name, img, Types, attack}) => {
  return (
    <div>
      
      {<div className="pokemon-card">
      <br />
          <div className="pokemon-img-container">
            <Link className="Link" to={`/pokemons/${id}`}>
              <img src={img} alt={name} className="pokemon-img" />
            </Link >
          </div>
          
          <div className="pokemon-name">
              <h3>{name}</h3>
          </div>
          
          <div className="pokemon-status">
             <h4>Atacck:</h4><h4> {attack}</h4>
          </div>
           <br />
          <div className="pokemon-type">
            Type:
            {(typeof id === 'string')
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
