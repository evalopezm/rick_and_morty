import React from 'react';
import '../stylesheets/characterDetail.css';
import { Link } from 'react-router-dom';
import Image from '../images/characternotfound.jpg';

function CharacterNotFound() {
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
          <img className='error-image' src={Image} alt='character not found'></img>
          <div>
            <h3>We're so sorry</h3>
            <p className='error-text'>
              There is no character <br /> with your search
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CharacterNotFound;
