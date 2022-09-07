import React from "react";
import CardPokemon from "./CardPokemon";

export const Cards = ({ results }) => {
  return (
    <div className='containPokemons'>
      {results?.map((poke) => (
        <div key={poke.data.index}>
          <CardPokemon data={poke.data} />
        </div>
      ))}
    </div>
  );
};
