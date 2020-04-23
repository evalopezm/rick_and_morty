import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

function CharacterSearch(props) {
  return (
    <p>
      hello
      <Filters />
      <CharacterList />
      {/* <Filters charactersFilter={props.charactersFilter} />
      <CharacterList characters={props.FilteredCharacters} /> */}
    </p>
  );
}

export default CharacterSearch;
