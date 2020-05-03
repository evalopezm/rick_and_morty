import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss';

// Listen input value and send it to App in order to search a character
function Filters(props) {
  const inputListener = (ev) => {
    ev.preventDefault();
    props.charactersFilter(ev.target.value);
  };

  // Listen input status
  const statusListener = (ev) => {
    props.statusFilter(ev.target.value);
  };

  return (
    <form>
      <div>
        <label className='text' htmlFor='characterSearcher'>
          Find your favourite character:
        </label>
        <input className='input-text' id='characterSearcher' type='text' placeholder='example: Rick' onChange={inputListener} value={props.nameFilter}></input>
      </div>
      <div>
        <p className='text'>Is your character alive?</p>
        <div className='status-radio'>
          <div className='status-text'>
            <label htmlFor='all' className='text'>
              <input style={{ cursor: 'pointer' }} id='all' type='radio' value={'all'} name='status' onChange={statusListener} />
              {''} All
            </label>
          </div>
          <div className='status-text'>
            <label htmlFor='alive' className='text'>
              <input style={{ cursor: 'pointer' }} id='alive' type='radio' value='Alive' name='status' onChange={statusListener} />
              {''} Alive
            </label>
          </div>
          <div className='status-text'>
            <label htmlFor='dead' className='text'>
              <input style={{ cursor: 'pointer' }} id='dead' type='radio' value='Dead' name='status' onChange={statusListener} />
              {''} Dead
            </label>
          </div>
          <div className='status-text'>
            <label htmlFor='unknown' className='text'>
              <input style={{ cursor: 'pointer' }} id='unknown' type='radio' value='unknown' name='status' onChange={statusListener} />
              {''} Unknown
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

// Exports and propTypes
export default Filters;
Filters.propTypes = {
  charactersFilter: PropTypes.func,
};
