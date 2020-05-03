import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters'; // input for search
import CharacterList from './CharacterList'; // List of characters

// Unifies the search and find components
function CharacterSearch(props) {
  return (
    <>
      <Filters charactersFilter={props.charactersFilter} nameFilter={props.nameFilter} statusFilter={props.statusFilter} aliveDeadFilter={props.aliveDeadFilter} />
      <CharacterList characters={props.characters} nameFilter={props.nameFilter} />
    </>
  );
}

// Exports and propTypes
export default CharacterSearch;
CharacterSearch.propTypes = {
  charactersFilter: PropTypes.func,
  characters: PropTypes.array,
};
