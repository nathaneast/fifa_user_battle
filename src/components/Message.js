import React from 'react';
import PropTypes from 'prop-types';

function Message({ text }) {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string
}

export default Message;
