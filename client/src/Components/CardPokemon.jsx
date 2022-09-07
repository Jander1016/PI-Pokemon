
import { Loading } from "./Loading";
//{`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.gif`}
//{data.sprites.other['official-artwork'].front_default}
//{`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`}
const CardPokemon=({data}) =>{

  return(
    <div>
      {
        Loading
        ?Loading(false)
        : <div className="card">
           <div className="card__Title">
              #{data.id} - {data.name.toUpperCase()}
            </div>
            <div className="card__Body">
                <img src= {data.sprites.other.home.front_default}
                  alt={data.name}
                />
            </div>
            <div className="card__Tipo">
              {data.types.map(t=><div key={t.type.name}>Type: { t.type.name}</div>)}
            </div>
        </div>
      }
    </div>
  )
};
 export default CardPokemon