import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const [jsonData, setjsonData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [pokemonName, setPokemonName] = useState("pikachu");

  const fetchData = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    // setjsonData(data.sprites.other["official-artwork"]);
    setjsonData(data);
  };

  useEffect(() => {
    fetchData();
  }, [pokemonName]);

  const searchPokemon = () => {
    if (searchText !== "") {
      setPokemonName(searchText);
    }
  };

  return (
    <div className="main-container">
      <h1>Search Your Pokemon</h1>
      <div className="search">
        <input
          className="search-text"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="search-btn" type="button" onClick={searchPokemon}>
          Search
        </button>
      </div>
      <div className="pokemon-card-container">
        <PokemonCard pokeData={jsonData} />
      </div>
    </div>
  );
};

export default Body;
