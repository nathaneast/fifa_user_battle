# FIFA USER BATTLE

![GIF 2020-08-24 오후 4-03-54](https://user-images.githubusercontent.com/47707076/91013993-936f2500-e623-11ea-9819-b96a41ee6ed3.gif)


## package.json - dependencies
- "axios": "^0.19.2",
- "prop-types": "^15.7.2",
- "react": "^16.13.1",
- "react-dom": "^16.13.1",
- "react-redux": "^7.2.1",
- "react-scripts": "3.4.3",
- "styled-components": "^5.1.1"


## 기술 스택
React hook
Redux toolkit


## 개발기간
5일


## 기능
- 입력한 두 유저 **데이터를 보여줌**
- 유저 입력시에  같은 유저 비교, 빈 값 입력, 존재하지 않는 유저일때  **메시지**


## 프로젝트를 하게된 계기
친구와 있을때 가끔 속된말로 '피파 한판 뜨자' 라는 이야기가 종종 나온다.
축구 프로팀 경기를 할 때에 검색을 해보면 순위,승점,평균득점 등등 두 팀의 전력을 비교하는 창을 보면서 피파온라인 유저들끼리도 전력을 비교할 수 있는 어플리케이션이 있으면 좋을것 같아서 만들게 되었다.


## 힘들었던점
###  1. api 작업시 오타
axios.create의 headers를 header로 적고 한참동안 오류를 찾는 과정이 힘들었다.. 결국 오타 한자였다. 해당 라이브러리의 문법이나 사용법을 잘 안다면 금방 찾을 수 있겠지만 익숙하지 않은 입장에서는 사용법이나 문법 숙지가 잘 안되어 있으니 오타를 정말 사전에 잘 방지해야 한다.

### 2. FIFA API 사용시 번거로움
유저나, 선수, 포지션 등 상세 정보 데이터를 키값으로 참조하고 있어서 해당 메타 데이터를 키값으로 또 한번 검색해서 원하는 데이터에 접근하는 과정이 번거로웠다.


## 아쉬운점
### 1. 효율적이지 않은 상태 관리 
사실 이렇게 규모가 작은 프로젝트에서 리덕스를 사용해서 store 한곳에서 상태를 모두 관리할 필요 없이 각 컴포넌트가 상태를 가지고 하위 컴포넌트에 props으로 값을 주는게 훨씬 효과적이다.
하지만 이번 프로젝트로 리덕스를 공부하며 리덕스의 flow를 이해하고, 만약 어플리케이션이 확장되어 어떤 컴포넌트든 store값에 접근해야하는 상황이 많이 생긴다면 리덕스 도입은 좋은 선택인것 같다.

###  2. FIFA API 지원하지 않는 데이터
사실 유저를 비교할때 가장 중요한 데이터는 유저가 선택한 클럽 팀, 클럽 팀 이미지, 구단가치, 팀 스쿼드인데 이 정보가 없어서 정말 아쉬웠다. 그래서 유저를 비교할때에 UX를 위해서  유저와는 상관 없지만 2개의 클럽 팀 이미지를 넣어주었다.

### 3. FIFA API 메타 데이터가 정규화 되어있지 않다.
유저의 등급, 최근 이적시장을 이용한 선수가 키값으로 되어있어서
메타 데이터에서 해당 키값이 어떤 등급, 선수인지 다시한번 조회 해야했다.
하지만 모두 각자의 객체로 되어있어서 모두 순회하지 않는 이상 키값으로만은 데이터를 찾을수 없었다.


## 느낀점
###  1. 공식 문서의 중요함
코딩하기 전에 리덕스 공식 문서를 꼼꼼하게 보면서 이해하고, 정보를 습득하려고 노력했다.
공식 문서는 정말 그 어느곳보다 자세하게 설명이 되어 있었다. 기억이 가물가물 할때에 해당 부분 공식 문서를 읽는게 문제 해결의 근본이 될수도 있겠다 라는 생각을 했다.

### 2. Redux toolkit의 편리함
기존에 리덕스를 사용할때에 리듀서, 액션, 액션타입  파일을 따로 만들어서 관리하거나
store 값에 접근시 mapStateToProps, mapDispatchToProps, connect를 사용하는게 불편했는데
리덕스 툴킷은 각 slice 파일에 리듀서, 액션을 관리하고 store값에 접근시 dispatch, useSelector 사용하여 매우 편리하게 작업할 수 있었다. 어플리케이션의 규모가 커지면 어떤 방법이 더 효율적일지는 모르겠지만 개인적으로 정말 편리하고 좋았다.