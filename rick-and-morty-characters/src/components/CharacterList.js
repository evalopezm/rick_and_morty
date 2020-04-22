import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  return (
    <ul className='character-list'>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </ul>
  );
}

export default CharacterList;
