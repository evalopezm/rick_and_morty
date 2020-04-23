import React, { useEffect, useState } from 'react';
import Image from '../images/logo.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterSearch from './CharacterSearch';
import CharacterDetail from './CharacterDetail';
import '../stylesheets/App.css';
import getDataFromApi from '../services/getDataFromApi';
import { Switch, Route } from 'react-router-dom';

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

  const FilteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  // Call to characterDetail

  // const renderCharacterDetail = (props) => {
  //   console.log(props);
  //   return <CharacterDetail />;
  // };

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
// <Switch>
//   <Route path='/character/:characterId' render={renderCharacterDetail} />
//   {/* <CharacterDetail /> */}
// </Switch>

export default App;
