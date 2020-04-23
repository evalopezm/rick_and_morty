import React from 'react';
import '../stylesheets/characterCard.css';

function CharacterCard(props) {
  //   console.log(props);

  return (
    <li className='character-card'>
      <img src={props.photo} />
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
    </li>
  );
}

export default CharacterCard;
