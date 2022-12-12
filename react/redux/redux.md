# redux 실습

## 1) 프로젝트 생성 및 필요한 라이브러리 설치

> yarn create react-app 프로젝트이름

> yarn add redux react-redux

## 2) UI 작업

- Counter와 ToDo 배치

- components 디렉토리

---

### 4) 컨테이너 컴포넌트 작업

- 컨테이너 컴포넌트: redux를 사용하는 컴포넌트

- 컨테이너 컴포넌트 생성
  - react-redux의 connect 함수 사용  
    connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)  
    mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해서 생성하는 함수이고 mapDispatchToProps는 액션 생성 함술르 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

---

## 9. MiddleWare

### 1) 개요

- 액션이 디스패치ㄷ 된 후 리듀서에서 해당 액션을 받아서 작업을 수행하기 전이나 후에 추가적인 작업을 할 수 있또록 해주는 것

- 작업을 수행하기 전에는 유효성 검사같은 작업을 많이 하고 작업이 수행된 후에는 로그 기록을 많이 합니다.

- 유사한 용도로 사용되는 것들을 부르는 명칭은 Filter, Interceptor, AOP 등이 있습니다.

### 2) 직접 생성한 미들웨어 적용

---

# 가상의 API Server 만들기

- 설치
  > npm install --location=global json-server (yarn global add json-server)

-실행

> json-server ./data.json --port 4000

- 브라우저에서 확인
  http://localhost:4000/posts  
   http://localhost:4000/posts/1

---

# react 프로젝트에서 외부 서버의 데이터를 proxy를 통해서 가져오기


- 브라우저에서 확인
  http://localhost:4000/posts -> /posts
  http://localhost:4000/posts/1-> /posts/1
