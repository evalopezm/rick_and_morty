import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';
import PropTypes from 'prop-types';
import CharacterNotFound from './CharacterNotFound';

function CharacterList(props) {
  // Search in the array all the characters that matches our input value
  const characterLis = props.characters.map((character) => {
    return <CharacterCard key={character.id} id={character.id} photo={character.photo} name={character.name} species={character.species} />;
  });

  // if there is no character matching our search show CharacterNotFound message
  if (characterLis.length === 0) return <CharacterNotFound nameFilter={props.nameFilter} />;
  return <ul className='character-list'>{characterLis}</ul>;
}

export default CharacterList;
CharacterList.propTypes = {
  characters: PropTypes.array,
  character: PropTypes.object,
};
