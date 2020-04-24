import React from 'react';
import '../stylesheets/characterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li className='character-card'>
      <Link className='card-link' to={`/character/${props.id}`}>
        <img className='character-photo' src={props.photo} alt={`${props.name}`} title={`${props.name}`} />
        <div className='card-text'>
          <h3 className='card-name'>{props.name}</h3>
          <p className='card-species'> {props.species}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;
