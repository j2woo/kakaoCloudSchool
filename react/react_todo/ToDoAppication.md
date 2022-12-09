# ToDo Application

## 1. 프로젝트 생성하고 필요한 라이브러리 설치

### 1) 프로젝트 생성

> yarn create react-app react_todo

### 2) 필요한 라이브러리

- sass-loader: scss 파일을 사용하기 위해서 설치
- sass: scss 파일을 사용하기 위해서 설치

- classnames: css를 작성할 classname을 편리하게 작성하기 위한 라이브러리

- react-icons: 아이콘을 사용하기 위한 라이브러리, (https://icons.github.io/react-icons)

- open-color: 색상을 직접 값으로 설정하는 것이 아니고 색상 이름과 정수 1개의 농도를 가지고 설정할 수 있도록 해주는 라이브러리, (https://yeun.github.io/open-color/)

### 3)

- Web Application에서 body나 모든 box태그에 margin과 padding을 0으로 설정하는 경우가 있는데 이유는 IE 구버전과의 호환성 문제 때문  
  IE 구버전은 width와 height안에 padding과 margin 그리고 border의 크기가 포함되고 나머지 브라우저는 content의 크기만 포함됩니다.

## 2. UI

- ToDoTemplate: Main
- ToDoInsert: 데이터 삽입을 위해서 하나의 input과 버튼을 가진 컴포넌트
- ToDoListItem: 하나의 항목을 출력하기 위한 컴포넌트
- ToDoList: ToDoListItem의 목록을 출력하기 위한 컴포넌트

- ToDoListItem을 ToDoList에 배치하고 ToDoList와 ToDoInsert를 ToDoTemplate에 배치해서 ToDoTemplate을 App에 배치

- ToDo의 내용은 구분하기 위한 값, 내용, 실행 여부로 구성

- 모든 컴포넌트와 scss 파일은 components 디렉터리에 배치  
  이 부분은 컴포넌트와 scss 파일과 index.js로 묶어서 별도의 디렉터리로 구성해도 됩니다.  
  이렇게 하는 것이 재사용성을 증가시킵니다.  
  node를 기반으로 하는 프로젝트에서 index.js의 역할은 디렉터리 안의 모든 것들을 외부에서 사용할 수 있도록 export하는 것 입니다.  
  require나 import할 때 디렉터리 이름을 사용하면 디렉터리 안에 있는 index.js 파일에서 export한 내용을 가져옵니다.

### 2) Main 화면 - ToDoTemplate

> ToToTemplate.scss

### 3) 데이터 삽입 화면 - input

### 4) 데이터 목록 화면 - ToDoListItem(하나의 항목 출력)과 ToDoList(ToDoListItem을 List로 출력)

- 하나의 항목을 출력할 ToDoListItem의 디자인을 위한 ToDoListItem.scss 파일을 만들고 작성

## 3. 기능 구현

### 1) 데이터 배열 출력

- App.js 파일을 수정해서 샘플 데이터 배열을 state(데이터가 수정되면 컴포넌트를 리랜더링)로 생성하고 ToDoList에게 전달(상위 컴포넌트에서 하위 컴포넌트에게 데이터를 전달할 때는 props를 사용)

### 2) 데이터 추가 기능- 데이터를 처리하는 함수는 App.js(state 가 App.js에 존재)에 만들어서 넘겨주는 구조
