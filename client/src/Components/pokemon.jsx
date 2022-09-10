import { memo } from "react";

const Pokemon = memo(({ name, img, Types }) => {
  return (
    <div>
      {<div className="pokemon-card">
          <div className="pokemon-img-container">
            <img src={img} alt={name} className="pokemon-img" />
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
