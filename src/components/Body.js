import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=200"
      );
      const data = await response.json();
      setPokemonList(data.results);
      setFilteredPokemon(data.results);
    };

    // {
    //   window.addEventListener("scroll", () => {
    //     if (
    //       window.scrollY + window.innerHeight >=
    //       document.documentElement.scrollHeight
    //     ) {
    //       fetchData();
    //     }
    //   });
    // }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.startsWith(searchText.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchText, pokemonList]);

  return (
    <div className="main-container">
      <h1>Search Your Pokemon</h1>
      <div className="search">
        <input
          className="search-text"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => setSearchText("")}
        >
          Clear
        </button>
      </div>
      <div className="pokemon-card-container">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default Body;
