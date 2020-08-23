import { fifaAPI } from '../api';

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
      averageGoal: `${(goalTotal / 5).toFixed(1)}골`
  }
}

export const processDivision = async (divisions, userId) => {
  let result = {};

  if (!divisions.length) {
    return;
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