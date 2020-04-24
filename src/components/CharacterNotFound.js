import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/characternotfound.jpg';
import '../stylesheets/characterDetail.css';

function CharacterNotFound(props) {
  console.log(props);

  return (
    <div className='character-detail'>
      <main>
        <Link to='/'>
          <div className='back-link'>
            <i className='fas fa-angle-left' />
            <p className='back-text'>Back</p>
          </div>
        </Link>
        <div className='detail-card'>
          <img className='error-image' src={Image} alt='character not found'></img>
          <div>
            <h3 className='error-text'>We're so sorry</h3>
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
