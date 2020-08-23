import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserCard from '../components/UserCard';
import Category from '../components/Category';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 10px 0px;
`;

function BattleDetail({ user1, user2 }) {
  return (
    <Container>
      <UserCard user={user1} />
      <Category />
      <UserCard user={user2} />
    </Container>
  );
}

BattleDetail.propTypes = {
  user1: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    division: PropTypes.object,
    match: PropTypes.object,
  }),
  user2: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    division: PropTypes.object,
    match: PropTypes.object,
  }),
};

export default BattleDetail;
