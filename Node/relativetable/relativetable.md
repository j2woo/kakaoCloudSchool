## 5. 2개 테이블 연결
### 1) 프로젝트 생성 - relativetable
### 2) 패키지 설치
- express, sequelize, sequelize-cli, mysql2
- nodemon


### 3) sequelize 초기화
- npx sequelize init  
4개의 디렉터리가 생성되는지 확인: config, migrations, models, seeders

> 메모장

### 5) config 디렉터리의 config.json 파일에 데이터베이스 정보를 설정
> config.json

> 메모장

### 8) package.json에서 npm start 명령을 내리면 App.js를 실행하고 수정하면 자동 실행되도록 설정

### 9) 터미널에서 실행하고 콘솔 확인

### 10) 테이블 설계
- users 테이블  
id- 정수, 기본키  
name- 문자열로 20이고 not null  
age- 정수이고 not null  
created_at- 날짜  
updated_at- 날짜


- comments 테이블  
id - 정수  
comment- 문자열 100자이고 not null  
created_at- 날짜  
updated_at- 날짜  
commenter - 정수이고 users 테이블의 id를 참조하는 외래키

### 11) 테이블을 위한 model을 생성 - models 디렉터리에서 수행
- models 디렉터리에 users 테이블의 model을 위한 users.js

