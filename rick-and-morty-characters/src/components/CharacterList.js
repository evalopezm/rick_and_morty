import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.css';

function CharacterList(props) {
  const CharacterLis = props.characters.map((character) => {
    return <CharacterCard key={character.id} photo={character.photo} name={character.name} species={character.species} />;
  });

  return <ul className='character-list'>{CharacterLis}</ul>;
}

export default CharacterList;
