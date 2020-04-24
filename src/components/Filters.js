import React from 'react';
import '../stylesheets/filters.css';

function Filters(props) {
  const inputListener = (ev) => {
    props.charactersFilter(ev.target.value);
  };

  return (
    <form>
      <label className='text' htmlFor='characterSearcher'>
        Busca a tu personaje favorito:{' '}
      </label>
      <input className='input' id='characterSearcher' type='text' placeholder='Rick' onChange={inputListener}></input>
    </form>
  );
}

export default Filters;
