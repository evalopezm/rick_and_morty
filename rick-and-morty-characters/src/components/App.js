import React, { useEffect, useState } from 'react';
import Image from '../images/logo.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/App.css';
import getDataFromApi from '../services/getDataFromApi';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log(characters);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={Image} alt='Logo de Rick and Morty' />
      </header>
      <main>
        <Filters />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}

export default App;
