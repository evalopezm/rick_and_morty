import React from 'react';
import Image from '../images/logo.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={Image} alt='Logo de Rick and Morty' />
      </header>
      <main>
        <Filters />
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
