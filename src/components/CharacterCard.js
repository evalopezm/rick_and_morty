import React from 'react';
import '../stylesheets/characterCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

export default CharacterCard;
CharacterCard.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};
