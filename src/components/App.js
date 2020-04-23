import React, { useEffect, useState } from 'react';
import Image from '../images/logo.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/App.css';
import getDataFromApi from '../services/getDataFromApi';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Filter
  const charactersFilter = (data) => {
    setNameFilter(data);
  };

  // console.log('name:', nameFilter);

  const FilteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={Image} alt='Logo de Rick and Morty' />
      </header>
      <main>
        <Filters charactersFilter={charactersFilter} />
        <CharacterList characters={FilteredCharacters} />
      </main>
    </div>
  );
}

export default App;
