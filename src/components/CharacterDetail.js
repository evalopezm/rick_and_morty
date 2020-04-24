import React from 'react';
import '../stylesheets/characterDetail.css';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  console.log(props.character);

  return (
    <div className='character-detail'>
      <main>
        <Link to='/'>
          <div className='back-link'>
            <i class='fas fa-angle-left' />
            <p>Back</p>
          </div>
        </Link>
        <div className='detail-card'>
          <img className='detail-img' src={props.character.photo} alt={props.character.name}></img>
          <div>
            <h3>{props.character.name}</h3>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            <p>Origin: {props.character.origin}</p>
            <p>Episodes: {props.character.episodes}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CharacterDetail;
