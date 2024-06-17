import React from "react";
import "./boxPokeStyles.css";

export const BoxPoke = ({ pokemons, onPokemonClick }) => {
    return (
      <div className="BoxPoke">
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            className="containerPokemon"
            onClick={() => onPokemonClick(pokemon.url)}
          >
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
