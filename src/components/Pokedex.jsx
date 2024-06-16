import React, { useState, useEffect } from "react";
import { Types } from "./Types";

export const Pokedex = () => {
  const MAX_POKEMON = 493;
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonLocations, setPokemonLocations] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPokemon(data.results);
      })
      .catch((error) => console.error("Error Fetching Data", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handlePokemonClick = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPokemon(data);
        setPokemonAbilities(data.abilities);
        setPokemonImage(data.sprites.other["home"].front_default);
        setPokemonTypes(data.types);
        fetch(data.location_area_encounters)
          .then((response) => response.json())
          .then((locations) => {
            const sinnohLocations = locations.filter((location) =>
              location.location_area.name.includes("sinnoh")
            );
            setPokemonLocations(sinnohLocations);
          })
          .catch((error) =>
            console.error("Error fetching location details:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching Pokemon details:", error)
      );
  };

  const filteredPokemons = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Pokedex</h1>
      {!selectedPokemon && (
        <input
          type="text"
          placeholder="Buscar Pokemon"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      )}
      {!selectedPokemon ? (
        <ul>
          {filteredPokemons.map((pokemon, index) => (
            <li key={index} onClick={() => handlePokemonClick(pokemon.url)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h2>{selectedPokemon.name}</h2>
          {pokemonImage && (
            <img src={pokemonImage} alt={selectedPokemon.name} />
          )}
          <h3>Habilidades</h3>
          <ul>
            {pokemonAbilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <h3>Tipos</h3>
          <Types types={pokemonTypes} />
          <h3>Sinnoh Locations</h3>
          <ul>
            {pokemonLocations.length > 0 ? (
              pokemonLocations.map((location, index) => (
                <li key={index}>{location.location_area.name}</li>
              ))
            ) : (
              <li>No se encontraron ubicaciones en Sinnoh.</li>
            )}
          </ul>
          <button onClick={() => setSelectedPokemon(null)}>Volver</button>
        </div>
      )}
    </div>
  );
};
