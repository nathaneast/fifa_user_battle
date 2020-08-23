import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;
const Item = styled.span`
  font-size: 17px;
  color: #ED4C67;
`;

function Message({ text }) {
  return (
    <Content>
      <Item>{text}</Item>
    </Content>
  );
}

Message.propTypes = {
  text: PropTypes.string
}

export default Message;
