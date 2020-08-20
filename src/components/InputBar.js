import React from 'react';
import PropTypes from 'prop-types';

function InputBar({ user1, user2, handleSubmit, handleChange }) {
  return (
    <div>
      <h1>FIFA USER BATTLE</h1>
      <div onSubmit={handleSubmit}>
        <form>
          <input value={user1} onChange={e => handleChange(e, 'user1')}></input>
          <input value={user2} onChange={e => handleChange(e, 'user2')}></input>
          <input type='submit' value='전력비교'></input>
        </form>
      </div>
    </div>
  );
}

InputBar.propTypes = {
  user1: PropTypes.string,
  user2: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default InputBar;
