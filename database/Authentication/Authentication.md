# Authentication

## 1. Authentication(인증)과 Authorization(인가)

- 인증: 계정 관련, 로그인 관련
- 인가: 권한 관련

## 2. 인증을 구현하는 방법

- 로컬 로그인: 회원 정보를 저장하고 있다가 인증  
  회원 정보를 저장할 때는 비밀번호가 복화하가 불가능한 방식을 사용하고 개인을 식별할 수 있는 정보를 마스킹 처리를 하거나 복화가 가능한 방식의 암호화를 활용해야 합니다.

- OAuth(공통된 인증 방식) 로그인: 다른 서버(카카오나 구글)에 저장된 인증 정보를 활용해서 인증을 하는 방식

## 3. 인증을 위한 프로젝트 기본 설정

- 로그인을 할 수 있도록 회원가입을 하고 로그인 처리를 수행하고 간단한 글과 파일을 업로드 할 수 있는 프로젝트

### 1) 프로젝트 생성

> Authentication

### 2) 필요한 패키지 설치

```
npm install express morgan dotenv compression morgan file-stream-rotator multer cookie-parser express-session express-mysql-session mysql2 sequelize sequelize-cli nunjucks

npm install --save-dev nodemon
```

### 3) package.json 파일을 수정

> package.json

```
"scripts": {
"start": "nodemon app",
"test": "test"
}
```

### 4) sequelize(node의 ORM) 초기화

```
npx sequelize init
```

### 5) 디렉터리 생성

> views: 화면에 출력할 파일이 저장되는 디렉토리

> routes: 사용자의 요청이 왔을 때 처리하는(Controller) 라우팅 파일이 저장되는 디렉터리

> public: 정적인 파일(resource)들이 저장되는 디렉터리

### 6) 프로젝트에 .env 파일을 생성하고 작성

- 소스코드에 노출하면 안면되는 내용이나 <strong>개발 환경에서 운영 환경으로 이행(Migration)</strong>할 때 변경될 내용을 작성하는데 이 내용은 실행 중에는 변경하지 않는 내용이어야 합니다.  
  ex) 데이터베이스 접속 정보, 암호화를 하기 위한 키 또는 서버 포트 번호  
  -> 이러한 내용은 대부분 실행 중에는 변경되지 않지만 개발 환경에서 운영환경으로 이행할 때 변경될 가능성이 높은 내용

> 메모장

### 8) 기본적인 처리

> https://www.passportjs.org/packages/passport-kakao/
