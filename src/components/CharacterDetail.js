import React from 'react';
import '../stylesheets/characterDetail.css';
import Image from '../images/logo.png';

function CharacterDetail() {
  return (
    <div className='character-detail'>
      <header className='App-header'>
        <img src={Image} alt='Logo de Rick and Morty' />
      </header>
      <main>
        <h1>El personaje aquí</h1>
        <button>x</button>
      </main>
    </div>
  );
}

export default CharacterDetail;
