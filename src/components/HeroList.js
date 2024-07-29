import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BattleModal from './BattleModal';
import SearchFilter from './SearchFilter';
import './HeroList.css';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [isBattleModalOpen, setIsBattleModalOpen] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('https://homologacao3.azapfy.com.br/api/ps/metahumans');
        setHeroes(response.data);
        setFilteredHeroes(response.data);
        localStorage.setItem('heroes', JSON.stringify(response.data));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        const cachedData = JSON.parse(localStorage.getItem('heroes'));
        if (cachedData) {
          setHeroes(cachedData);
          setFilteredHeroes(cachedData);
        }
      }
    };

    fetchHeroes();
  }, []);

  const handleSearch = (searchTerm) => {
    const results = heroes.filter(hero => hero.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredHeroes(results);
  };

  const selectHero = (hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes(prev => [...prev, hero]);
    }

    if (selectedHeroes.length === 1) {
      setIsBattleModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedHeroes([]);
    setIsBattleModalOpen(false);
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <div className="hero-list">
        {filteredHeroes.map(hero => (
          <div key={hero.id} className="hero-card" onClick={() => selectHero(hero)}>
            <img src={hero.images.sm} alt={hero.name} />
            <h3>{hero.name}</h3>
          </div>
        ))}
      </div>
      {isBattleModalOpen && <BattleModal heroes={selectedHeroes} onClose={closeModal} />}
    </div>
  );
};

export default HeroList;
