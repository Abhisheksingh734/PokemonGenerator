import React, { useEffect, useState } from "react";
import IMG from "../utils/constants";

const PokemonCard = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    };

    fetchData();
  }, [url]);

  if (!pokemonData) {
    return <div className="no-data">Loading...</div>;
  }

  const officialArtwork =
    pokemonData.sprites?.other?.["official-artwork"]?.front_default;
  const name = pokemonData.name;
  const hp = pokemonData.stats?.[0]?.base_stat;
  const attack = pokemonData.stats?.[1]?.base_stat;
  const defense = pokemonData.stats?.[2]?.base_stat;
  const specialAttack = pokemonData.stats?.[3]?.base_stat;
  const speed = pokemonData.stats?.[5]?.base_stat;

  return (
    <div className="pokemon-container">
      <div className="pokemon-img">
        {officialArtwork ? (
          <img src={officialArtwork} alt="pokemon image" />
        ) : (
          <img src={IMG} alt="default pokemon image" />
        )}
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <div className="pokemon-stats">
          <div className="stat-item">
            <span className="stat-label">HP:</span>
            <span className="stat-value">{hp}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Attack:</span>
            <span className="stat-value">{attack}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Defense:</span>
            <span className="stat-value">{defense}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Special Attack:</span>
            <span className="stat-value">{specialAttack}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Speed:</span>
            <span className="stat-value">{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
