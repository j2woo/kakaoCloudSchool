# react styling: 스타일 적용

## 1. styling 방식

- 일반 CSS 사용
- Sass: CSS 전처리기(pre-processor)를 이용하는 방식으로 확장된 CSS 문법 사용
- CSS Module: 스타일을 작성할 때 CSS 클래스 이름이 다른 CSS 클래스 이름과 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션
- styled-components: 컴포넌트 안에 스타일을 내장시키는 방식으로 동일한 스타일이 적용된 컴포넌트를 사용하는 방식 -> 실제 애플리케이션 제작 작업을 할 때 이런 방식으로 만들어진 컴포넌트들을 많이 이용

## 2. 일반 CSS 적용

### 1) 개요

- webpack의 css-loader를 이용해서 일반 CSS를 불러오는 방식
- react 프로젝트를 생성하면 App.js가 App.css를 불러와서 적용

### 2) Naming

- react 프로젝트에서는 컴포넌트-클래스이름의 형태로 네이밍  
  App-header: App 컴포넌트 안에 header라는 클래스를 의미
- BEM(Block Element Modifier) 방법- CSS에서는 가장 많이 사용  
  각각의 요소는 -나 *로 구분  
  블럭요소*요소이름\_수정자이름의 형태로 네이밍
- SMACSS(Scalable and Modular Architecture for CSS)- 확장형 모듈식 구조  
  Base에는 아무런 접두어도 붙이지 않고 Layout 관련된 경우 l- 이름을 정하는 방식  
  State의 경우는 is- 또는 s- 등을 추가  
  용도를 파악하기 편리
- 이외에도 OOCSS 등이 있음

### 3) App.css를 수정해서 적용

- App.css 파일에 추가(App 클래스 안에 a 태그)
  .App a{
  color:
  }

## 3. CSS Module 사용

### 1) 개요

- CSS를 불러와서 사용할 때 클래스 이름을 고유한 값으로 만들어서 적용  
  [파일이름]_[클래스이름]_[해시값]을 추가해서 클래스 이름을 부여
- 사용하는 방법은 css 파일의 확장자를 .module.css로 만들면 됩니다.
- 이 기능을 사용할 때는 css 파일의 클래스 이름을 일반적인 이름으로 사용하면 됩니다.
- 별도의 클래스 이름을 부여하지 못하도록 하고자하는 경우에는 클래스 이름 앞에 :global을 추가하면 됩니다.

### 2) 적용

> CSSModule.module.css

- css 파일의 디자인을 적용할 컴포넌트 생성
  > CSSModule.jsx]

### 3) 어러 개의 클래스 동시 적용

> CSSModule.module.css

## 4. classnames 라이브러리

### 1) 개요

- CSS 클래스를 조건부로 설정할 때 유용한 라이브러리로 여러 클래스를 설정할 때 편리
- 설치
  > yarn add classnames(npm install classnames)

classNames('one','two'): 2개 설정  
classNames('one',['two', 'three']): 3개 설정  
classNames('one',{two':true}): two 적용  
classNames('one',{two':false}): two 적용 안됨

true나 false 위치를 변수로 설정하면 조건부 설정을 쉽게 구현하는 것이 가능

### 2)

> 메모장

## 5. Sass

### 1) CSS Preprocessor(전처리기)

- CSS가 동작하기 전에 사용하는 기능
- CSS의 불편함을 해결하기 위한 확장 기능
- 문법 자체는 CSS와 유사하지만 선택자의 중첩이나 조건문, 반복문, 다양한 단위의 연산 등이 가능
- Saas, Less, Stylus 등이 있음.

### 2) SASS

- Syntatically Awesome Style Sheets
- 중복되는 코드를 줄여서 가독성 좋게 작성 가능
- 가이드: https://sass-guildelin.ed/ko
- SCSS  
  CSS 구문과 호환되도록 새로운 구문을 도입해 만든 SASS의 기능을 지원하는 CSS의 super set
- 패키지 설치: yarn add node-scss scss-loader sass
- 확장자는 scss를 사용

### 3) CSSModule.module.css 파일을 수정해서 적용

- CSSModule.module.css 파일의 확장자를 scss로 수정

### 4) scss 파일을 생성하고 적용

> App.scss 파일을 생성하고 작성

### 5) 변수와 믹스 인 사용

- $변수명:값; 의 형태로 변수를 만들어서 다른 곳에서 @import를 이용해서 사용이 가능
- 믹스 인은 여러 속성을 모아놓은 것

```
@mixin 이름(){
    속성: 값
    ...
}

@include 이름();

// 변수와 믹스인은 자주 사용하는 속성이 있을 때 유용
```

- src 디렉터리에 styles

- 애플리케이션을 개발하다보면 컴포넌트 1개와 scss 파일 1개가 쌍으로 만들어지는 경우가 많은데 여러 컴포넌트를 만들다보면 공통적으로 사용하는 scss 라이브러리들이 있는데 이러한 라이브러리들을 util.scss에서 import하면 다른 곳에서는 별도의 impo

### 6) SCSS 라이브러리

- SCSS가 이미 적용된 라이브러리
- 반응형 웹 디자인(디바이스의 크기에 상관없이 동일한 콘텐츠를 사용할 수 있도록 하는 것): include-media
- 색상: open

- 컴포넌트를 만들 때 디렉터리 구조  
  src 디렉터리 안에 components라는 디렉터리를 생성  
  이 디렉터리 안에서 컴포넌트 파일과 디자인 파일을 생성  
  디렉터리 안에 컴포넌트 이름으로 디렉터리를 생성하고 컴포넌트 파일과 디자인 파일 그리고 index.js(컴포넌트를 내보내는 역할만 수행) 파일을 생성

- 컴포넌트를 저장할 components 디렉터리 생성

### 7) Material Design

- 개요  
  웹과 앱을 통틀어 모든 개발 플랫폼에서 사용자 경험을 하나로 묶기 위해서(Progressive Web Design) 구글이 제시한 디자인 방식
  scss파일이나 css 파일을 다운로드 받아서 적용- 네트워크 사용 여부와 상관없이 사용할 수 있지만 앱의 크기가 커짐

- 실행하고 위의 div와 아래 div를 확인

- 다운로드 받아서 직접 넣고 사용

## 7. 서버에서 데이터 받아오기

https://jsonplaceholder.typicode.com/users

### 1) 서버에서 데이터 받아오는 방법

- ajax 이용 - load이벤트와 error 이벤트

- Fetch API: Promise를 이용하는 API

- axios 라이브러리를 사용하는 방법
  > yarn add axios

### 2) Node 서버dptjdml CORS 설정

- node server에서 cors 설정  
  yarn add cors 또는 npm add cors로 cors 라이브러리를 설치

- 서버 실행 파일에 추가  
  const cors=require('cors');  
  app.use(cors());

### 3) 서버를 수정할 수 없을 때 proxy 설정

- package.json 파일에 설정을 추가  
  "proxy":"서버의 도메인"  
  <br/>
  요청을 할 때/api/도메인 뒤의 url로 요청하면 됩니다.

- 라이브러리를 이용
> yarn add http-proxy-middleware로 라이브러리를 설치  

> setupProxy.js
