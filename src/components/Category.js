import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  grid-template-rows: repeat(8, 20px);
  width: 300px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
const Text = styled.span`
  font-size: 20px;
`;
export default () => {
  return (
    <Content>
      <Item>
        <Text>닉네임</Text>
      </Item>
      <Item>
        <Text>레벨</Text>
      </Item>
      <Item>
        <Text>공식경기 최고등급</Text>
      </Item>
      <Item>
        <Text>시즌</Text>
      </Item>
      <Item>
        <Text>감독모드 최고등급</Text>
      </Item>
      <Item>
        <Text>시즌</Text>
      </Item>
      <Item>
        <Text>공식경기 최근 전적</Text>
      </Item>
      <Item>
        <Text>골 평균</Text>
      </Item>
      <Item>
        <Text>감독모드 최근 전적</Text>
      </Item>
      <Item>
        <Text>골 평균</Text>
      </Item>
    </Content>
  );
}
