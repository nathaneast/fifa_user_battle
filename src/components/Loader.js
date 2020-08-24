import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const Image = styled.img`
  font-size: 40px;
  width: 500px;
  margin: 20px 0px;
`;
const Item = styled.span`
  font-size: 55px;
`;

function Loader () {
  return (
    <Content>
      <Image src={require('../images/loader_goal.gif')} alt='loader_goal'></Image>
      <Item>Loading...</Item>
    </Content>
  );
}

export default Loader;
