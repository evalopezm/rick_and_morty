import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import PropTypes from 'prop-types';

function CharacterSearch(props) {
  return (
    <>
      <Filters charactersFilter={props.charactersFilter} />
      <CharacterList characters={props.characters} />
    </>
  );
}

export default CharacterSearch;
CharacterSearch.propTypes = {
  charactersFilter: PropTypes.func,
  characters: PropTypes.array,
};
