import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectUser1, selectUser2 } from '../features/home/HomeSlice';
import BattleDetail from './BattleDetail';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const BattleBoard = styled.section`
  display: grid;
  grid-template-columns: 300px 200px 300px;
`;
const BattleBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bolder;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 250px;
`;
const ButtonContainer = styled.section`
  margin-top: 15px;
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 17px;
  background-color: #d63031;
  color: white;
  border-radius: 10px;
  font-weight: bolder;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;
function Battle({ handleClose }) {
  const user1 = useSelector(selectUser1);
  const user2 = useSelector(selectUser2);

  return (
    <Container>
      <BattleBoard>
        <ImageContainer>
          <Image src={require('../images/bayern_munchen.png')} alt='userPoster1'></Image>
        </ImageContainer>
        <BattleBetween>VS</BattleBetween>
        <ImageContainer>
          <Image src={require('../images/psg.png')} alt='userPoster2'></Image>
        </ImageContainer>
      </BattleBoard>

      <BattleDetail
        user1={user1}
        user2={user2}
      />

      <ButtonContainer>
        <Button onClick={() => handleClose()}>뒤로가기</Button>
      </ButtonContainer>
    </Container>
  );
}

Battle.propTypes = {
  handleClose: PropTypes.func
}

export default Battle;
