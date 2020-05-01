import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../images/logo.png'; // Header image
import getDataFromApi from '../services/getDataFromApi'; // Api
import CharacterSearch from './CharacterSearch'; // Search input
import CharacterDetail from './CharacterDetail'; // Details card
import '../stylesheets/App.scss';

function App() {
  //states
  const [characters, setCharacters] = useState([]); //Array
  const [nameFilter, setNameFilter] = useState(''); //input value
  //get characters from API and put them in the state
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Filters
  const charactersFilter = (data) => {
    setNameFilter(data);
  };
  // Organize characters by name
  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  // Filter characters by search
  const FilteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  // Router
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter !== undefined) return <CharacterDetail character={foundCharacter} />;
  };

  // Paint
  return (
    <div className='App'>
      <header className='header'>
        <img className='header-image' src={Image} alt='Logo de Rick and Morty' />
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <CharacterSearch characters={FilteredCharacters} charactersFilter={charactersFilter} nameFilter={nameFilter} />
          </Route>
          <Route path='/character/:characterId' render={renderCharacterDetail} />
        </Switch>
      </main>
      <footer className='footer'>
        <p className='footer-text'>© Created by Eva López Merino - 2020</p>
      </footer>
    </div>
  );
}

// Exports and propTypes
export default App;
App.propTypes = {
  match: PropTypes.any,
};
