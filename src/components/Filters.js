import React from 'react';

function Filters(props) {
  const inputListener = (ev) => {
    props.charactersFilter(ev.target.value);
  };

  return (
    <form>
      <label htmlFor='characterSearcher'>Busca a tu personaje favorito: </label>
      <input id='characterSearcher' type='text' onChange={inputListener} placeholder='Rick'></input>
    </form>
  );
}

export default Filters;
