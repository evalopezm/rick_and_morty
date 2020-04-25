import React from 'react';
import Image from '../images/characternotfound.jpg';
import '../stylesheets/characterDetail.scss';
//Shares stylesheets with characterDetail

function CharacterNotFound(props) {
  return (
    <div className='character-detail'>
      <main className='character-detail-card'>
        <img className='error-image' src={Image} alt='character not found'></img>
        <div>
          <h3 className='error-text'>We're so sorry</h3>
          <p className='error-text'>
            There is no character <br /> with your search: <br /> {props.nameFilter}
          </p>
        </div>
      </main>
    </div>
  );
}

export default CharacterNotFound;
