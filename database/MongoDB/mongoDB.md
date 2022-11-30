# Mongo DB
## 1. Mongo DB
- 도큐먼트 지향 no SQL
- JSON 형식의 BSON이라는 데이터 구조를 사용
- 샤딩(데이터를 나누어서 저장한느 기술)과 복제를 지원

## 2. 설치 및 접속
1) Server 설치
- windows: mongodb 사이트에서 다운로드 받아서 설치(운영체제 업데이트를 한 경우에는 x-code-select --install 명령을 수행한 후 아래 명령 실행)
- max: brew tap mongodb/brew  
brew install mongodb-community
- linux는 종류 별로 다름: 


mongod -dbpath 경로 --bind_ip 0.0.0.0

#