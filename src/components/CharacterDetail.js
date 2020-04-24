import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetail.css';

function CharacterDetail(props) {
  console.log(props.character);
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
        <Link className='back-link' to='/'>
          <div className='back-link-icons'>
            <i className='fas fa-angle-left' />
            <p className='back-text'>Back</p>
          </div>
        </Link>
        <div className='detail-card'>
          <img className='detail-img' src={props.character.photo} alt={props.character.name}></img>
          <div className='detail-info'>
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
