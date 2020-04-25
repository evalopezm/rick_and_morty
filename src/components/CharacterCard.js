import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/characterCard.scss';

// Paint each character card in the list
function CharacterCard(props) {
  return (
    <li className='character-card'>
      <Link className='character-card-link' to={`/character/${props.id}`}>
        <img className='character-card-photo' src={props.photo} alt={`${props.name}`} title={`${props.name}`} />
        <div className='character-card-text'>
          <h3 className='character-card-name'>{props.name}</h3>
          <p className='character-card-species'> {props.species}</p>
        </div>
      </Link>
    </li>
  );
}

// Exports and propTypes
export default CharacterCard;
CharacterCard.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};
