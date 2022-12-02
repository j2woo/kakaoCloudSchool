# React

## 1.react

- 유저 인터페이스를 만드는데 사용할 수 있는 자바스크립트 라이브러리
- SPA(Single Page Application) 구현을 위해서 사용하는 경우가 많습니다.
- component  
  특정 부분의 모양을 결정하는 선언체  
  템플릿 엔진은 데이터 셋과 HTML을 가지고 HTML을 재생성해서 보여주는 용도로만 사용하지만 컴포넌트는 많은 기능을 내장한 재사용 가능한 개체
- 출력 속도가 빠름 - Virtual DOM을 이용  
  DOM(Document Object Model)은 자바스크립트 내장 객체보다 처리 속도가 느림  
  react에서는 Virtual DOM을 이용해서 출력할 내용을 메모리에 만든 후 데이터가 변경되면 Virtual DOM에 적용을 하고 실제 DOM과 비교를 한 후 변경되는 부분만 수정해서 출력하는 형태로 동작을 해서 빠르게 출력  
  템플릿 엔진은 데이터가 변경되면 변경된 데이터와 HTML을 가지고 다시 화면을 만들어서 출력  
  이 방식이 게임 엔진이 화면 출력을 만드는 방식
- MVC(Model View Controller), MVVM(Model View ViewModel), MVW(Model Viw Whatever), MVP(Model View Presentation) 등의 구조를 위한 프레임워크와 다른 오로지 View만을 위한 라이브러리
- 단점: react만으로는 애플리케이션을 만들 수 없기 때문에 화면을 만드는 것을 제외한 기능은 직접 구현해야 함.  
  ajax 처리를 위한 axios나 fetch API와 같은 데이터를 가져오기 위한 라이브러리와 redux와 같은 라이브러리들을 같이 학습하게 됨.

## 2. 개발 환경 설정

### 1) node 설치

### 2) npm: node의 패키지 관리자로 node를 설치하면 자동으로 설치가 됨.

### 3) yarn

- npm을 개선한 패키지 관리자
- npm보다 속도가 빠르고 더 나은 캐싱시스템을 사용
- 설치: npm install yarn인데 yarn 명령을 모든 곳에서 사용할 수 있도록 하기 위해서 전역으로 설치
  > npm install -g yarn 또는 npm install --location=global yarn
- 설치 확인

  > yarn --version

- max이나 linux는 관리자 모드가 아니면 global 설치가 안되므로 mac이나 linux인 경우는 앞에 sudo를 붙이고 해주어야 합니다.
  > sudo npm install --location=global yarn

### 4) webpack

- 프로젝트에 사용된 파일을 분석해서 웹 문서 파일로 변환해주는 도구
- 웹 브라우저는 js와 css 그리고 html을 해석할 수 있는데 프레임워크나 라이브러리를 사용하다보면 이러한 확장자 이외의 파일을 만들어서 사용하는 경우가 있는데 이 경우 webpack이 css나 html로 변환해줍니다.

### 5) babel

- 대다수의 브라우저들은 ES6(ECMA 2015) 버전의 자바스크립트 문법까지는 적용할 수 있는데 그 이상 버전의 문법은 이해하지 못하는 경우가 있을 수 있어서 babel이 이러한 코드들을 ES6 이하의 문법으로 변환해주는 Trans Compiler

### 6) IDE

- Visual Studio Code와 같은 IDE 필요  
  여러가지 확장 프로그램 설치

### 7) 형상 관리 도구

- Git이 대표적인 형상 관리 도구

### 8) 디버깅을 위한 도구

- 크롬 확장 프로그램- React Developer Tools

### 9) react 프로젝트를 만들기 위한 애플리케이션 설치

> yarn global add create-react-app

## 3. React Application 생성 및 실행

### 1) 생성 create-react-app 애플리케이션이름

- 기본 구조가 만들어져서 나옴
- entry point는 App.js

### 2) 실행

> yarn start

- App.js를 읽어서 실행하고 브라우저를 자동으로 실행시켜 줍니다.  
  기본 포트는 3000번

## 4. 프로젝트 생성 및 실행

### 1) 프로젝트 생성

> yarn crate react-app 애플리케이션이름(Windows)

> npx create-react-app 애플리케이션이름

- 둘 중 아무거나 만들어지는데 시간이 걸림
- 라이브러리 설치할 때도 yarn add로 안되면 npm install로 하면 됩니다.

### 2) 프로젝트 실행

> yarn start

> npm start

- 실행을 하면 localhost:3000번의 URL을 가지고 웹 브라우저가 실행되고 화면에 react 로고가 출력됩니다.
- 실행이 될 때 모든 파일들을 읽어서 번들러를 이용해서 실행 가능한 자바스크립트 파일을 만들어서 실행
- 소스코드를 수정하면 자동으로 번들러가 해석을 해서 화면에 적용
  > 위에 메모장 22.12.2

## 5. JSX

- JavaScript XML의 약자로 JavaScript에 XML을 추가한 확장형 문법으로 react 프로젝트에 사용하는 문법
- 브라우저에서 실행할 때 Babel이 자바스크립트 코드로 변환을 해서 실행

### 1) 장점

- 보기 쉽고 익숙
- 코드 작성 중 오류가 있으면 Babel이 코드를 변환하는 과정에서 이를 감지
- HTML 태그와 Component를 혼용해서 개발하는 것이 가능

### 2) 규칙

- 주석

  ```
  {/_ 주석 _/}
  //나 /\* \*/도 가능하지만 이렇게 주석을 만드는 경우 />는 다음 줄에 나와야 합니다.
  ```

  - 반드시 하나의 부모요소로 시작해야한다. 루트는 반드시 하나
  - 태그는 반드시 닫아야해  
    닫는 태그를 사용하던가 아니면 빈 태그처럼 <태그 />으로 처리를 해주어야 합니다.
  - 자바스크립트 내용을 출력하고자 하면 {} 안에 표현

  - if는 사용할 수 없지만 삼항 연산자는 사용 가능

  - 스타일을 적용할 때는 객체 형식으로 설정  
    문자열로 설정하지 않음  
    모든 스타일 속성은 camel case를 이용
    스타일에서 - 가 들어가는 경우 이름이 변경됩니다.  
    backgound-color -> backgroundColor
