import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/characterList.scss';
import CharacterCard from './CharacterCard'; // Cards for each character in the list
import CharacterNotFound from './CharacterNotFound'; // When you don't find a character

function CharacterList(props) {
  // Search in the array all the characters that matches our input value
  const characterLis = props.characters.map((character) => {
    return <CharacterCard key={character.id} id={character.id} photo={character.photo} name={character.name} species={character.species} />;
  });

  // if there is no character matching our search show CharacterNotFound message
  if (characterLis.length === 0) return <CharacterNotFound nameFilter={props.nameFilter} />;
  return <ul className='character-list'>{characterLis}</ul>;
}

// Exports and propTypes
export default CharacterList;
CharacterList.propTypes = {
  characters: PropTypes.array,
  character: PropTypes.object,
};
