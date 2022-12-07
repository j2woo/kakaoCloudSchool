# react_hooks

## 1. 컴포넌트 반복

- 동일한 모양의 컴포넌트를 여러 개 배치
- 배열 형태의 데이터를 출력할 때 유용하게 사용

### 1) 배열.map()- 변환

- 배열의 데이터를 순회하면서 매개변수로 받은 함수를 요소 단위로 수행한 후 그 결과를 모아서 다시 배열로 리턴하는 함수

- map에 설정하는 매개변수

1. callback 함수(필수)- 매개변수는 3개까지 될 수 있고 반드시 하나의 데이터를 리턴해야 함.

```
    첫번째 매개변수는 순회하는 각 요소
    두번째 매개변수는 인덱스
    세번째 매개변수는 배열 그 자체
```

2. callback 함수 내부에서 사용할 this 참조(선택)

### 2) 배열을 이용한

> 메모장

- 실행을 하고 확인을 하면 출력은 제대로 되는데 콘솔 창에 에러가 있음  
  react에서는 Component 배열을 랜더링할 때

### 3) 유동적인

> 메모장

## 2. Life Cycle

- 인스턴스 생성~ 소멸까지의 과정
- 생성은 생성자(Constructor)가 담당하고 소멸은 소멸자(Destructor)가 담당
- IoC(Inversion of Control)- 제어의 역전, 클래스는 개발자가 생성하지만 인스턴스의 생성과 소멸은 개발자가 하지 않고 다른 프레임워크나 컨테이너 등이 하는 형태)가 적용된 경우에는 특별한 경우가 아니면 생성자를 이용해서 인스턴스를 생성하지 않음  
  react에서 컴포넌트는 IoC가 적용된 객체  
  안드로이드나 react는 IoC가 적용된 객체를 Component라고 부름.  
  Spring에서는 Spring Bean이라고 함.

- IoC가 적용되면 일반적으로 생성자를 직접 호출하지 않기 때문에 수명주기 관련 메서드를 이용해서 생성과 소멸될 때 작업을 수행

### 1) react가 Component의 수명주기

Mount(컴포넌트가 메모리 할당을 받아서 출력)-> Update(컴포넌트 정보를 업데이트하는 것으로 리랜더린)-> Unmount(컴포넌트가 화면에서 제거)

### 2) Mount 될 때 호출되는 메서드

- constructor 생성자: 가장 먼저 호출, state 초기화를 수행

- getDerivedStateFromProps: props에 있는 값을 state에 동기화할 때 호출

- render: 랜더링할 때 호출되는 메서드로 this.props와 this.state를 이용해서 props와 state 접근이 가능

- componentDidMount: 화면에 보여지고 난 후 호출되는 메서드, 비동기 작업(네트워크 사용이나 타이머 작업) 수행

### 3) update할 때 호출되는 메서드

- getDerivedStateFromProps: props에 있는 값을 state에 동기화할 때 호출

- shouldComponentUpdate: 리랜더링을 결정하는 메서드로 여기서 false를 리턴하면 리랜더링 안됨

- render

- getSnapshotBeforeUpdate: 변경된 내용을 DOM에 적용하기 직전에 호출되는 메서드

- componentDidUpdate: 업데이트 후 호출되는 메서드

### 4) Unmount될 때 호출되는 메서드

- componentWillUnMount: 사라지기 전에 호출되는 메서드로 memory leak(타이머)이 발생할 수 있는 객체의 제거 작업을 수행

### 5) 라이프 사이클 이용 시 주의할 점

- react의 개발모드가 React.StrictMode로 설정되어 있으면 개발환경에서는 Mount를 2번씩 합니다.

## 3. 에러를 화면에 출력

### 1) 에러를 발생시키기 위해서 Iteration.jsx 파일에서 없는 프로퍼티를 호출

```jsx
{
  this.state.missing.value;
}
```

### 2) state 관련된 에러가 발생하면 호출되는 메서드를 재정의해서 에러가 발생했다는 사실을 출력해주는 컴포넌트를 생성 - ErrorBoundary.jsx

## 4. Hooks

- React 16.8 버전에 추가
- Class Component의 기능을 Function Component에서 사용할 수 있도록 해주는 기능

## 5. useState

- state를 함수 컴포넌트 안에서 사용할 수 있도록 해주는 hook
- useState의 매개변수는 state의 초깃값이 되고 리턴하는 데이터는 state와 state의 값을 변경할 수 있는 setter 함수의 배열

> 메모장

## 6. uesRef

- ref: 컴포넌트를 좆ㄱ하기 위해서 붙이는 일종의 id와 같은 변수
- useRef로 만들어진 변수는 값이 변경된다고 해서 컴포넌트가 리랜더링되지는 않음
- useRef(초기값)으로 변수를 생성하고 컴포넌트나 DOM에 설정할 때는 ref 속성에 생성된 변수를 대입해주면 됩니다.

## 7. useEffect

- state가 변경된 후 수행할 side effect를 설정하는 Hook
- Class의 LifeCycle중에서 componentDidMount와 componentDidUpdate, ComponentWillUnmount가 합쳐진 형태

- Class의 수명주기 메서드 사용

- 실행하고 검사 창을 열어서 console을 확인해보면 생성자와 마운트가 2번 되는 것을 확인할 수 있는데 이는 개발 환경에서 strict mode가 적용되면 그렇게 됨.

### 2)

### 3) useEffect 함수

## 8. 객체 배열을 함수형 컴포넌트로 출력하고 삽입, 삭제, 갱신을 수행하기

### 1) 하나의 객체를 출력할 컴포넌트와 객체 배열을 출력할 컴포넌트 작성

> UserList.jsx

### 2) 데이터 추가 구현

- 추가 화면에 해당하는 컴포넌트 생성
  > CreateUser.jsx  
  > 기본 데이터는 App.js 파일에 존재  
  > 실제 데이터 추가는 App.js 파일에 있는 데이터에 추가되어야 함  
  > 이련 경우에는 App.js state나 이벤트 핸들러를 만들고 createUser에게 props 형태로 전달을 해서 사용하는 것이 편리

### 3) 삭제 구현

- 데이터를 출력할 때 이메일 뒤에 삭제 버튼을 추가해서 삭제 버튼ㅇ

### 4) 배열의 데이터를 수정- 계정 이름을 클릭하면 active 속성 값을 toggle(반전) 시켜서 글자 색상을 변경하도록 하기

## 9. useMemo

- 연산된 값을 재사용하는 Hook
- 성능 최적화를 위해서 사용
- 매개변수로 연산을 수행하는 함수와 배열을 대입받는데 배열에 변화가 생긴 경우에만 연산을 수행하는 함수를 수행하고 그렇지 않은 경우는 함수를 호출해도 결과만 다시 제공

### 1) App.js를 수정해서 현재 active가 true인
