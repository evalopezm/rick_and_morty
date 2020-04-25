import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetail.scss';
import PropTypes from 'prop-types';

function CharacterDetail(props) {
  const isDead = () => {
    if (props.character.status === 'Dead') return <i className='fas fa-skull-crossbones'></i>;
    else {
      return <i className='far fa-smile'></i>;
    }
  };

  const isHuman = () => {
    if (props.character.species === 'Human') return <i className='fas fa-male'></i>;
    else {
      return <i className='fab fa-reddit-alien'></i>;
    }
  };

  return (
    <div className='character-detail'>
      <main>
        <Link className='character-detail-back-link' to='/'>
          <div className='character-detail-back-link-icons'>
            <i className='fas fa-angle-left' />
            <p className='character-detail-back-text'>Back</p>
          </div>
        </Link>
        <div className='character-detail-card'>
          <img src={props.character.photo} alt={props.character.name}></img>
          <div className='character-detail-info'>
            <h3>{props.character.name}</h3>
            <p>
              Status: {props.character.status} {isDead()}
            </p>
            <p>
              Species: {props.character.species}
              {isHuman()}
            </p>
            <p>Origin: {props.character.origin}</p>
            <p>Episodes: {props.character.episodes}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CharacterDetail;
CharacterDetail.propTypes = {
  character: PropTypes.object,
};
