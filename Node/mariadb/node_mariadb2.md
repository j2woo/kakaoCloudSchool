## SPA(Single Page Application) 구현 방법
- 하나의 HTML 파일에 스크립트를 이용해서 여러 개의 콘텐츠를 출력하는 방식 - 비추천
- 각 콘텐츠에 해당하는 별도의 html 파일을 만들고 이를 불러들이는 방식 - 대부분의 SPA 프레임워크(React, Vue 등)들이 이 방식으로 구현(js 파일의 형태로 구현)- 이렇게 만들어진 콘텐츠에 해당하는 파일들을 컴포넌트라고 합니다.

하나의 HTML에서 다른 HTML 파일을 가져오는 것은 ajax로 가능 -> 근데 이렇게 안해~ 
``` js
<a href="파일의 경로"> //이렇게 구현 거의 x,
<a href="서버에 요청하는 경로"> // 보통 이렇게
// 클라이언트가 서버에 요청 -> 서버 -> 클라이언트에게 응답
 ```

 ---
 클라이언트와 서버간의 데이터 교환 시 고려할 내용
 - 클라이언트가 접속할 때 마다 서버에서 데이터를 받아오는 경우  
 실시간으로 데이터가 많이 변하는 경우는 이렇게 구현하는 것이 좋습니다.  
  <br/>
거의 데이터의 변화가 없는 경우나 오프라인 상태에서도 애플리케이션을 사용하고자 하는 경우에는 이 방법은 좋은 방법이 아님

-> 서버의 데이터를 로컬에 저장을 하고 로컬에 데이터가 없으면 다운로드 받고 로컬에 데이터가 있는 경우는 서버의 데이터에 변화가 있다면 변화가 생긴 데이터만 가져오는 방식으로 구현  
게임은 거의 대부분 이렇게 구현  
캘린더 앱의 경우도 이렇게 구현하는 것이 좋아.   
<br/>
데이터가 변경된 경우에는 기본키 값들을 비교해서 서버에 존재하는데 클라이언트에 없으면 데이터를 가져오고 서버에 없는 클라이언트에 존재하면 클라이언트에서 삭제합니다.


MySQL이나 Maria DB는 Snake 표기법을 사용합니다.  

대문자 안쓰고 MemberBoard-> member_board


--- 
# 프로그래밍 언어에서 관계형 데이터베이스를 사용하는 방법

## 1. 데이터베이스 드라이버만 이용해서 작업

- 소스코드 안에 SQL을 삽입해서 작업하는 방식
- 소스코드 안에 SQL이 삽입되어 있어서 유지보수가 어려움

## 2. SQL Mapper 방식
- 소스코드와 SQL을 분리해서 작성하는 방식
- 사용이 쉽기 때문에 SI와 같은 여러 명이 공동으로 작업하는 프로젝트에서 많이 사용   
- 성능은 떨어짐
- Java나 ASP.net에서 사용하는 ***MyBatis***가 가장 대표적인 프레임워크

## 3. ORM
- 관계형 데이터베이스의 테이블을 클래스와 그리고 테이블의 행을 인스턴스와 매핑해서 사용하는 방식으로 SQL을 사용할 수도 있고 사용하지 않을 수도 있음
- 성능이 SQL Mapper보다 좋기 때문에 솔루션 개발에 많이 이용
- 배우기가 어렵기 때문에 SI에는 적합하지 않음
- Java의 JPA(Hibernate로 구현하는 경우가 많음)나 node의 sequelize 그리고 Python의 Djange 등이 대표적인 프레임워크입니다.
- 대부분의 경우는 데이터베이스를 변경할 때 설정만 변경하면 됨  


--- 
# Node_ORM
## 1. ORM(Object Relational Mapping)
- 객체 지향 패러다임을 관계형 데이터베이스에 적용하는 기술
- 관계형 데이터베이스의 Table은 객체 지향 프로그래밍의 클래스와 유사한데 Table에서는 여러 개의 칼럼을 만들지만 Class에서는 속성을 만들어서 저장하는 것이 유사   
이런 이유때문에 Instance와 Row가 유사  
이를 적절히 이용해서 Instance를 가지고 관계형 데이터베이스 작업을 할 수 있도록 만든 프레임워크가 ORM
- Instance를 가지고 작업을 수행하면 프레임워크가 SQL로 변경을 해서 데이터베이스에 작업을 수행하는 형태로 동작
- node에서는 sequelize 모듈이 이러한 작업을 수행할 수 있습니다. 

## 2. Sequelize를 이용한 하나의 테이블 연동
### 1) 패키지를 설치
- sequelize, sequelize-cli, mysql2

### 2) sequelize 초기화
- npx sequelize init 명령을 수행  
- 초기화를 수행하면 config, migration, models, seeders 디렉토리가 생성됨  
config: 데이터베이스 접속 정보를 설정   
models: 각 테이블과 매핑되는 클래스를 설정  
<br/>
migrations: 데이터베이스 스키마(구조, 테이블)가 변경되는 경우를 위한 설정  
seeders: 테스트 데이터 사용을 위한 설정

## 3. 데이터베이스 접속 설정
### 1) config 디렉터리의 config.json 파일 수정

### 2) models 디렉터리의 index.js 파일 수정

### 3) App.js 파일에 데이터베이스 연결

## 4. 하나의 테이블을 연동
- 테이블을 먼저 만들고 연결을 시켜도 되고 모델을 만들고 처음 실행을 하면 테이블이 존재하지 않으면 테이블이 생성됨  
테이블이 이미 존재하면 존재하는 테이블과 연결을 합니다.   
실무 환경에서는 테이블을 먼저 만들고서 모델을 만들고 학습을 할 때는 모델을 가지고 테이블을 생성
### 1) 테이블과 연결할 모델 생성
- Sequelize.Model을 상속받은 클래스를 생성
- 2개의 메서드 오버라이딩  
static init 메서드: 현재 테이블에 대한 설정  
static associate 메서드: 다른 테이블과의 관계를 위한 설정

- static init 메서드  
첫 번째 인수: 칼럼에 대한 설정  
``` 
    자료형 매핑
        VARCHAR <-> STRING
        CHAR <-> CHAR
        TEXT <-> TEXT
        TYNYINY(1) <-> BOOLEAN
        INT, INTEGER <-> INTEGER
        FLOAT <-> FLOAT
        DOUBLE <-> DOUBLE
        DATETIME <-> DATE
        TIME <-> TIME
        BLOB <-> BLOB
        JSON <-> JSON

    제약조건
        allowNull
        unique
        defaultValue
        validate
```
두 번째 인수: 테이블에 대한 설정   
```
    timestaps: true로 설정하면 createAt과 updateAt 칼럼이 자동으로 생성돼서 데이터가 생성된 날짜와 수정된 날짜를 자동으로 삽입 

    underscored: 시퀄라이즈는 이름을 기본적으로 Camel Case로 만드는데 이를 Snake Case로 변경하고자 할 때 사용

    modelName: 노드 프로젝트에서 사용할 모델 이름

    tableName: 데이터베이스의 테이블 이름

    paranoid: 데이터를 삭제할 때 삭제하지 않고 deletedAt 이라는 칼럼을 생성해서 이 칼럼의 값을 true로 만들고 조회할 때 제외하기 위한 옵션

    charset과 collate: 캐릭터 셋으로 한글을 사용하고자 할 때 utf8이나 utf8_general로 설정하고 이모티콘까지 사용하고자 하면 utf8mb4와 utf8mb4_general_ci를 설정
```

- static associate 메서드  
자신의모델이름.hasMany나 belongsTo를 호출하는데 hasMany는 참조되는 경우(부모 테이블로 외래키의 참조 대상)이고 belongsTo는 참조하는 경우(외래키로 소유한 경우)에 호출

### 2) 모델을 이용한 쿼리 메서드
- 삽입: create
- 조회
```
    findOne
    fineAll
```
- 수정: update
- 삭제: delete
### 3) 연동할 테이블을 위해서 기본 테이블을 삭제
drop table goods;

### 4) models 디렉터리에 goods 테이블과 연동할 모델을 생성
> good.js

### 5) models 디렉터리의 index.js 파일에 생성한 모델을 사용할 수 있도록 추가 설정

### 6) App.js 파일에 Good을 사용하기 위한 설정을 추가
const{Good} = require('./models');

### 7) App.js 파일의 내용을 수정해서 sequalize 

