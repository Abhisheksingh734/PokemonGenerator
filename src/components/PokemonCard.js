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
  const type = pokemonData.types?.[0]?.type?.name;

  const getTypeColor = (type) => {
    switch (type) {
      case "fire":
        return "#EA7A3C"; // Orange
      case "water":
        return "#539AE2"; // Blue
      case "electric":
        return "#E5C531"; // Yellow
      case "grass":
        return "#71C558";
      case "bug":
        return "#94BC4A";
      case "dark":
        return "#736C75";
      case "fighting":
        return "#CB5F48";
      case "ghost":
        return "#846AB6";
      case "ground":
        return "#CC9F4F";
      case "ice":
        return "#70CBD4";
      case "normal":
        return "#AAB09F";
      case "poison":
        return "#B468B7";
      case "psychic":
        return "#E5709B";
      case "dragon":
        return "#6A7BAF";
      case "steel":
        return "#89A1B0";
      case "rock":
        return "#B2A061";
      default:
        return "#f5f5f5"; // Default color
    }
  };

  const backgroundColor = getTypeColor(type);

  return (
    <div className="pokemon-container" style={{ backgroundColor }}>
      <div className="pokemon-img">
        {officialArtwork ? (
          <img src={officialArtwork} alt="pokemon image" />
        ) : (
          <img src={IMG} alt="default pokemon image" />
        )}
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <h4 className="pokemon-type">{type}</h4>

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
