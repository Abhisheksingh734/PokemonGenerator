import IMG from "../utils/constants";
const PokemonCard = (props) => {
  const { pokeData } = props;
  console.log(pokeData);
  if (pokeData === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pokemon-container">
      <div className="pokemon-img">
        <img
          src={pokeData.sprites.other["official-artwork"].front_default}
          alt="pokemon image"
        />
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokeData.name}</h2>
        <div className="pokemon-stats">
          <div className="stat-item">
            <span className="stat-label">HP:</span>
            <span className="stat-value">{pokeData.stats[0].base_stat}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Attack:</span>
            <span className="stat-value">{pokeData.stats[1].base_stat}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Defense:</span>
            <span className="stat-value">{pokeData.stats[2].base_stat}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Special Attack:</span>
            <span className="stat-value">{pokeData.stats[3].base_stat}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Speed:</span>
            <span className="stat-value">{pokeData.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
