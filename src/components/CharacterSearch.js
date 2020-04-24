import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

function CharacterSearch(props) {
  return (
    <>
      <Filters charactersFilter={props.charactersFilter} />
      <CharacterList characters={props.characters} />
    </>
  );
}

export default CharacterSearch;
