# React_Router

## 1. Router

- 요청 URL에 따라 분기를 해서 출력을 하는 것

## SPA(Single Page Application)

### 1) Serve Rendering

- 웹 브라우저가 서버에게 요청을 전송하면 서버가 HTML을 전송해서 전체를 다시 출력하는 방식
- 사용자와 인터럭션이 많은 웹 애플리케이션에서는 속도 측면에서 문제가 발생할 수 있음

### 2) SPA

- 첫번째 요청을 전송했을 때만 HTML이 전송되고 그 이후부터는 요청을 하면 서버가 JS
  ON(XML도 가능) 형태의 데이터를 전송하고 브라우저가 이 데이터를 파싱해서 랜더링하는 구조
- 단점

1. 앱의 규모가 커지면 자바스크립트 파일의 사이즈가 너무 커져서 트래픽과 로딩 속도에 문제가 발생할 수 있는데 이 문제를 해결하기 위해서는 Code Splitting을 이용해서 해결
2. 브라우저에서 자바스크립트 코드를 관리하는 경우 크롤러가 페이지의 정보를 제대로 받아가지 못하는 현상이 발생해서 검색 엔진에서 페이지의 검색 결과에 포함하지 못하는 경우 발생
3. 처음 자바스크립트가 실행될 때까지 페이지가 비어 있기 떄문에 빈 페이지가 보여질 수 있음. 이런 경우를 방지하기 위해서는 첫 번째 페이지는 서버에서 랜더링을 해서 보여지고 다음 페이지부터 클라이언트 랜더링을 하는 것이 좋습니다.

- 적절한 라우팅을 이용해서 여러 컴포넌트를 하나의 페이지에 출력
- 라우팅에 많이 사용되는 라이브러리: react-router-dom(5버전과 6버전이 많이 다름)

## 3. 기본적인 사용

## 4. 링크

- Link라는 컴포넌트 이용
- Link 컴포넌트를 이용하면 페이지를 새로 불러오지 않고 그대로 유지한 상태에서 HTML5 History API를 사용해서 페이지의 URL만 갱신  
  실제로는 a 태그로 만들어져 있는 페이지 전환을 방지하는 기능을 추가
- 사용하는 방법
<Link to=URL>내용</Link>

## 5. URL Prameter & Query String

### 1) URL Prameter

- URL의 마지막이나 중간에 데이터를 전송하는 것  
  /profiles/adam-> adam 부분을 데이터처럼 변경하면서 사용할 수 있는데 URL Prameter라고 합니다.

- 이 경우 라우팅을 할 때 URL을 /profiles/:이름 의 형태로 작성해야 합니다.

### 2) Query String

- URL 뒤에 ? 를 추가하고 이름과 값을 전달할 때 사용  
  /profiles?name=adam&email=itstudy@kakao.com

### 3) URL Parameter를 읽어서 다른 내용을 출력

- 출력할 컴포넌트를 생성- Profile.jsx

### 4) Query String 읽기

- 근본적으로 Query String은 Client가 Server에게 전달하는 데이터  
  react 측면에서는 Query String을 읽는 것 보다는 만드는 것이 중요  
  만드는 것은 JavaScript 문법을 이용  
  Queury String은 반드시 인코딩을 해서 만들어야 합니다.

- useLocation이라는 Hook을 이용해서 location 객체를 리턴받아서 사용
- location 객체의 정보
  pathname: query string을 제외한 경로  
  search: ?를 포함한 query string
  hash: # 문자열 형태의 값, segment라고 부르기도 하는데 하나의 페이지 내에서 이동하기 위해서 사용, 예전의 구형 브라우저에서 클라이언트 라우팅을 할 때 사용, jquery(Cross Browsing 라이브러리) mobile이 hash를 사용  
  state: 페이지 이동시 임의로 넣을 수 있는 상태 값

- react-router-dom에서도 useSearchParams라는 Hook으로 바로 읽을 수 있습니다.
- qs 라이브러리를 이용하면 query string을 객체로 변환할 수 있습니다.

## 5. Sub Routing

- Router 내부에 다시 Router를 만드는 것

- Web에서의 페이지 이동

1. Forwarding: 요청(request) 객체를 유지하면서 이동, 새로고침을 하면 요청이 다시 이루어지는데 이 경우는 서버에서 처리하는 로직이 있으면 다시 로직을 수행  
   새로 고침을 했을 때 작업을 다시 수행하고자 하는 경우 사용- 조회에 이용

2. Redirect: 요청 객체를 소멸시키면서 이동, 새로고침을 하면 요청이 다시 이루어지는 것이 아니고 현재 보여지고 있는 결과를 다시 출력  
   작업을 다시 수행하지 않아야하는 경우 사용- 삽입, 삭제, 갱신에 이용

3. useNavigate Hook이 리턴한 함수를 호출해서 처리할 수 있는데 매개변수로는 정수나 문자열 하나 그리고 옵션을 설정  
   첫 번째 매개변수가 숫자이면 숫자만큼 뒤나 앞으로 이동  
   문자열이면 이동할 URL이 됨.

### 3) NavLink

- Link와 거의 유사한데 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일을 적용할 수 있도록 해주는 컴포넌트

### 4) Navigate

- 화면에 보여지는 순간 다른 페이지로 이동하고자 할 때 사용하는 컴포넌트

### 5) 404 에러(클라이언트의 URL이 잘못된 경우)에 대한 대응

- Route를 만들 때 path를 "\*"로 설정함ㄴ 모든 경우에 반응하는데 이 컴포넌트는 Route의 맨 아래에 추가하면 앞의 path를 확인한 후 앞에 일치하는 path가 없어지 자신에게 설정된 페이지로 이동

# Context

## 1. react 프로젝트에서의 데이터 공유

- Component의 props를 이용해서 하위 Component에게 넘겨주는 구조를 이용  
  구조가 간단할 때는 크게 어려움이 없지만 구조가 복잡해지면 번거로운 작업이 많아집니다.  
  여러 곳에서 하나의 데이터를 사용하는 경우도 유사한 작업이 반복됨.
- Context API를 이용하면 공유 데이터 작성이 쉬워짐
