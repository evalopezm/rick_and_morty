import React from 'react';
import '../stylesheets/characterDetail.scss';
import Image from '../images/characternotfound.jpg'; // Teddy Bear image
//Shares stylesheets with characterDetail

// When you don't find a character matching your search
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

// Exports and propTypes
export default CharacterNotFound;
