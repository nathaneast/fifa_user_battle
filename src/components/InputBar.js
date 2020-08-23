import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Message from '../components/Message';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0px;
`;
const Title = styled.h1`
  font-size: 100px;
  margin: 30px;
`;
const Content = styled.div`
`;
const InputContainer = styled.div`
  display: flex;
`;
const Between = styled.div`
  display: flex;
  margin: 0px 30px;
  font-size: 30px;
  font-weight: bolder;
`;
const Input = styled.input`
  text-align: center;
  width: 200px;
  font-size: 26px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const ButtonContainer = styled.div`
  text-align: center;
  margin: 30px 0px;
`;
const Submit = styled.input`
  all: unset;
  cursor: pointer;
  padding: 14px;
  background-color: #d63031;
  color: white;
  border-radius: 10px;
  font-weight: bolder;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

function InputBar({ user1, user2, handleSubmit, handleChange, message }) {
  return (
    <Container>
      <Title>FIFA USER BATTLE</Title>
      <Content onSubmit={handleSubmit}>
        <form>
          <InputContainer>
            <Input value={user1} onChange={e => handleChange(e, 'user1')} placeholder='user1'></Input>
            <Between>
              <span>VS</span>
            </Between>
            <Input value={user2} onChange={e => handleChange(e, 'user2')} placeholder='user2'></Input>
          </InputContainer>
          {message && <Message text={message} />}
          <ButtonContainer>
            <Submit type='submit' value='전력비교'></Submit>
          </ButtonContainer>
        </form>
      </Content>
    </Container>
  );
}

InputBar.propTypes = {
  user1: PropTypes.string,
  user2: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  message: PropTypes.string
}

export default InputBar;
