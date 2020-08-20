import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTk5NjYzNjc3MCIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE1OTc4MTkzMjgsImV4cCI6MTYxMzM3MTMyOCwiaWF0IjoxNTk3ODE5MzI4fQ.lSb2S6m5LkIWs0PEzz6wOYZAGkgpFQPU4mpHi0DzkFY';

const fifa = axios.create({
  baseURL: 'https://api.nexon.co.kr/fifaonline4/v1.0/',
  headers: {
    'Authorization': API_KEY
  }
});

export const fifaAPI = {
  searchUserName: userName => fifa.get(`users?nickname=${userName}`)
    .catch(error => {
      console.log(error);
    }),
}
