import React from 'react';
import PropTypes from 'prop-types';
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

function UserCard({ user }) {
  return (
    <Content>
      <Item>
        <Text>{user.name}</Text>
      </Item>
      <Item>
        <Text>{user.level}</Text>
      </Item>
      <Item>
        <Text>{user.division.official ? user.division.official.division : '없음'}</Text>
      </Item>
      <Item>
        <Text>{user.division.official ? user.division.official.date : '없음'}</Text>
      </Item>
      <Item>
        <Text>{user.division.practice ? user.division.practice.division : '없음'}</Text>
      </Item>
      <Item>
        <Text>{user.division.practice ? user.division.practice.date : '없음'}</Text>
      </Item>
      <Item>
        <Text>{user.match.official.matchResult}</Text>
      </Item>
      <Item>
        <Text>{user.match.official.averageGoal}</Text>
      </Item>
      <Item>
        <Text>{user.match.practice.matchResult}</Text>
      </Item>
      <Item>
        <Text>{user.match.practice.averageGoal}</Text>
      </Item>
    </Content>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    division: PropTypes.object,
    match: PropTypes.object,
  }),
};

export default UserCard;
