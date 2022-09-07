import { memo } from "react";

const Pokemon = memo( ({ name, img, Types }) => {
  return (
    <div>
      {
        <div className="card" key={name}>
          <div className="card__Title">{name.toUpperCase()}</div>
          <div className="card__Body">
            <img src={img} alt={name} />
          </div>
          <div className="card__Tipo">
            {Types.map((t) => (
              <div key={t}>Type: {t}</div>
            ))}
          </div>
        </div>
      }
    </div>
  );
});
export default Pokemon;
