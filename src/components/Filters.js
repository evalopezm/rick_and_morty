import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss';

// Listen input value and send it to App in order to search a character
function Filters(props) {
  const inputListener = (ev) => {
    ev.preventDefault();
    props.charactersFilter(ev.target.value);
  };

  return (
    <form>
      <label className='text' htmlFor='characterSearcher'>
        Busca a tu personaje favorito:
      </label>
      <input className='input' id='characterSearcher' type='text' placeholder='example: Rick' onChange={inputListener} value={props.nameFilter}></input>
    </form>
  );
}

// Exports and propTypes
export default Filters;
Filters.propTypes = {
  charactersFilter: PropTypes.func,
};
