import React from 'react';
import '../stylesheets/characterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li className='character-card'>
      <Link to={`/character/${props.id}`}>
        <img className='character-photo' src={props.photo} alt={`${props.name}`} />
        <p>Name: {props.name}</p>
        <p>Species: {props.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
