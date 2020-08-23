import { fifaAPI } from '../api';
import { useSelector } from 'react-redux';

export const processUserMatch = async matchs => {
  let victory = 0;
  let draw = 0;
  let defeat = 0;
  let goalTotal = 0;

  const promises = matchs.map(async matchId => {
    const {
      data: {
        matchInfo: {
          0: {
            matchDetail: { matchResult },
            shoot: { goalTotal: goal }
          }
        }
      }
    } = await fifaAPI.matchDetail(matchId);

    if (matchResult === '승') {
      victory++;
    } else if (matchResult === '패') {
      defeat++;
    } else {
      draw++;
    }

    goalTotal += goal;
  });
  await Promise.all(promises);

  return {
      matchResult: `${victory}승 ${draw}무 ${defeat}패`,
      averageGoal: `${goalTotal ? (goalTotal / 5).toFixed(1) : 0}골`
  }
}

export const processDivision = async divisions => {
  let result = {};

  if (!divisions.length) {
    return result;
  }

  divisions.forEach((item, index) => {
    const {
      achievementDate: date,
      division
    } = item;

    if (index) {
      result.official = {
        date: date.split('T')[0],
        division
      }
    } else {
      result.practice = {
        date: date.split('T')[0],
        division
      }
    }
  });

  return result;
}

// export const aaa = () => {
//   const {
//     name: name1,
//     level: level1,
//     division: division1,
//     match: match1
//   } = useSelector(selectUser1);

//   name: PropTypes.string,
//   level: PropTypes.number,
//   division: PropTypes.shape({
//     official: PropTypes.shape({
//       date: PropTypes.string,
//       division: PropTypes.number,
//     }),
//     practice: PropTypes.shape({
//       date: PropTypes.string,
//       division: PropTypes.number,
//     }),
//   }),
//   match: PropTypes.shape({
//     official: PropTypes.shape({
//       averageGoal: PropTypes.string,
//       matchResult: PropTypes.string,
//     }),
//     practice: PropTypes.shape({
//       averageGoal: PropTypes.string,
//       matchResult: PropTypes.string,
//     }),
//   }),
//   anyUser: PropTypes.number,
// }
