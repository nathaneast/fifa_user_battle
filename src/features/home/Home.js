import React, { useState } from 'react';

import { fifaAPI } from '../../api';
import Battle from '../../components/Battle';
import InputBar from '../../components/InputBar';
import Message from '../../components/Message';

function Home() {
  const [userName1, setUserName1] = useState('');
  const [userName2, setUserName2] = useState('');
  const [message, setMessage] = useState(null);

  const handleChange = (e, user) => {
    user === 'user1' ? setUserName1(e.target.value) : setUserName2(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (userName1 && userName2 && userName1 === userName2) {
      setMessage('같은 유저를 비교할 수 없습니다');
    } else if (userName1 && userName2) {
      getUserData();
    }
  }
  const getUserData = async () => {
    const userReult1 = await fifaAPI.searchUserName(userName1);
    const userReult2 = await fifaAPI.searchUserName(userName2);
    const users = [userReult1, userReult2];
    let nonUser = null;

    for (let i = 0; i < users.length; i++) {
      if (!users[i]) {
        nonUser = !i ? userName1 : userName2;
        break;
      }
    }

    if (nonUser) {
      setMessage(`${nonUser}는 존재하지 않는 유저 입니다`);
    } else {
      // 둘다 값 가져온 상황

    }

  }

  return (
    <>
      <InputBar
        user1={userName1}
        user2={userName2}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      {message && <Message message={message} />}
    </>
  );
}

export default Home;
