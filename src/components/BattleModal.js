import React from 'react';
import './BattleModal.css';

const BattleModal = ({ heroes, onClose }) => {
  if (heroes.length !== 2) return null;

  const hero1 = heroes[0];
  const hero2 = heroes[1];

  // Função para calcular a soma dos atributos
  const calculateTotalPower = (powerstats) => {
    return Object.values(powerstats).reduce((total, stat) => total + stat, 0);
  };

  // Calculando os atributos de ambos os heróis
  const hero1TotalPower = calculateTotalPower(hero1.powerstats);
  const hero2TotalPower = calculateTotalPower(hero2.powerstats);

  // Determinar o vencedor
  const winner = hero1TotalPower > hero2TotalPower ? hero1 : hero2;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 class="title"><span>Winner </span>{winner.name}</h2>
        <div className="hero-container">
          <div className="hero">
            <img class="imgbattle" src={hero1.images.md} alt={hero1.name}/>
            <h3 class="hero1">{hero1.name}</h3>
            <div class="valor2">
             <p>{hero1.powerstats.intelligence}</p>
             <p>{hero1.powerstats.strength}</p>
             <p>{hero1.powerstats.speed}</p>
             <p>{hero1.powerstats.durability}</p>
             <p>{hero1.powerstats.power}</p>
             <p>{hero1.powerstats.combat}</p>
            </div>
            <h4>Total de Poder: {hero1TotalPower}</h4>
          </div>
          <div className="hero">
            <img class="imgbattle2" src={hero2.images.md} alt={hero2.name} />
            <h3 class="hero2"> {hero2.name}</h3>
            <div class="valor">
            <p>{hero2.powerstats.intelligence}</p>
              <p>{hero2.powerstats.strength}</p>
              <p>{hero2.powerstats.speed}</p>
              <p>{hero2.powerstats.durability}</p>
              <p>{hero2.powerstats.power}</p>
              <p>{hero2.powerstats.combat}</p>
            </div>
             <div class="power">
              <p>Inteligência </p>
              <p>Força </p>
              <p>Velocidade </p>
              <p>Durabilidade </p>
              <p>Poder </p>
              <p>Combate</p>
            </div>
            <h4>Total de Poder: {hero2TotalPower}</h4>
          </div>
        </div>
        <div className="battle-result">
          <h3>Vencedor: {winner.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default BattleModal;
