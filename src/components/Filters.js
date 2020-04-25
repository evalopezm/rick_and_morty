import React from 'react';
import '../stylesheets/filters.scss';
import PropTypes from 'prop-types';

function Filters(props) {
  const inputListener = (ev) => {
    ev.preventDefault();
    props.charactersFilter(ev.target.value);
  };

  return (
    <form>
      <label className='text' htmlFor='characterSearcher'>
        Busca a tu personaje favorito:{' '}
      </label>
      <input className='input' id='characterSearcher' type='text' placeholder='example: Rick' onChange={inputListener} value={props.nameFilter}></input>
    </form>
  );
}

export default Filters;
Filters.propTypes = {
  charactersFilter: PropTypes.func,
};
