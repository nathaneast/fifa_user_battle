import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { update, selectUser1, selectUser2 } from './HomeSlice';
import { fifaAPI } from '../../api';
import { processUserMatch, processDivision } from '../../utils/helper';

import InputBar from '../../components/InputBar';
import Message from '../../components/Message';
import Battle from '../../components/Battle';

function Home() {
  const [userName1, setUserName1] = useState('');
  const [userName2, setUserName2] = useState('');
  const [message, setMessage] = useState(null);
  const [viewBattle, setViewBattle] = useState(false);

  const dispatch = useDispatch();
  // const u1 = useSelector(selectUser1)
  // const u2 = useSelector(selectUser2)
  // console.log(u1, u2)

  const handleChange = (e, user) => {
    user === 'user1' ? setUserName1(e.target.value) : setUserName2(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!userName1 || !userName2) {
      setMessage('유저 이름을 입력 해주세요');
    } else if (userName1 === userName2) {
      setMessage('같은 유저를 비교할 수 없습니다');
    } else if (userName1 && userName2) {
      hasUserCheck();
    }
  }

  const hasUserCheck = async () => {
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
      const { data: userData1 } = userReult1;
      const { data: userData2 } = userReult2;
      getUserData(userData1, userData2);
    }
  }

  const getUserData = async (userData1, userData2) => {
    const {
      accessId: userId1,
      level: userLevel1,
      nickname: userName1
    } = userData1;
    const {
      accessId: userId2,
      level: userLevel2,
      nickname: userName2
    } = userData2;
    dispatch(update([
      { level: userLevel1, name: userName1 },
      { level: userLevel2, name: userName2 }
    ]));

    const { data: userDivision1 } = await fifaAPI.userRating(userId1);
    const { data: userDivision2 } = await fifaAPI.userRating(userId2);
    dispatch(update([
      {
        division: await processDivision(userDivision1)
      }, {
        division: await processDivision(userDivision2)
      }
    ]));

    const { data: officialMatchs1 } = await fifaAPI.userMatch(userId1, 50);
    const { data: practiceMatchs1 } = await fifaAPI.userMatch(userId1, 52);
    const { data: officialMatchs2 } = await fifaAPI.userMatch(userId2, 50);
    const { data: practiceMatchs2 } = await fifaAPI.userMatch(userId2, 52);
    dispatch(update([
      {
        match: {
          official: await processUserMatch(officialMatchs1),
          practice: await processUserMatch(practiceMatchs1)
        }
      },
      {
        match: {
          official: await processUserMatch(officialMatchs2),
          practice: await processUserMatch(practiceMatchs2)
        }
      },
    ]));

    setViewBattle(true);
  }

  return (
    <>
      {viewBattle ? (
        <Battle
          handleClose={setViewBattle}
        />
      ) : (
          <>
            <InputBar
              user1={userName1}
              user2={userName2}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
            <Message text={message} />
          </>
        )}
    </>
  );
}

export default Home;
