import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';
import PropTypes from 'prop-types';

function CharacterList(props) {
  const characterLis = props.characters.map((character) => {
    return <CharacterCard key={character.id} id={character.id} photo={character.photo} name={character.name} species={character.species} />;
  });

  return <ul className='character-list'>{characterLis}</ul>;
}

export default CharacterList;
CharacterList.propTypes = {
  characters: PropTypes.array,
  character: PropTypes.object,
};
