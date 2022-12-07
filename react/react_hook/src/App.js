/*
import Iteration from "./Iteration";
import ErrorBoundary from "./ErrorBoundary";
import InputSample from "./InputSample";
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Iteration />
      </ErrorBoundary>
      <InputSample />
    </div>
  );
}

export default App;
*/
/*
import React from "react";

class ClassEffect extends React.Component {
  // 생성자
  constructor(props) {
    super(props);
    console.log("생성자 - 가장 먼저 호출되는 메서드");
    this.state = {
      count: 0,
    };
  }

  // Component가 Mount된 후 호출되는 메서드
  componentDidMount() {
    console.log("마운트 된 후 호출되는 메서드");
    document.title = `You clicked ${this.state.count} times`;
  }

  // Component가 Update된 후 호출되는 메서드
  componentDidUpdate() {
    console.log("업데이트 된 후 호출되는 메서드");
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={(e) => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ClassEffect />
    </div>
  );
};
export default App;
*/
/*
import React, { useState, useEffect } from "react";

const ClassEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운트와 업데이트가 끝나면 호출");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ClassEffect />
    </div>
  );
};
export default App;
*/
import React from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useState, useRef } from "react";
const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    // state를 수정할 때는 원본을 복제한 후 수정
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 배열의 데이터를 수정하면 컴포넌트가 리랜더링 될 수 있도록
  // state로 생성
  const [users, setUsers] = useState([
    { id: 1, username: "jiwoo", email: "kjk04021@naver.com", active: false },
    { id: 2, username: "캬캬", email: "캬캬@gmail.com", active: true },
  ]);

  // 변수를 생성
  const nextId = useRef(3);

  // 데이터 삽입 메서드
  const onCreate = () => {
    // 하나의 객체 생성
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // users에 user 추가
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  // 삭제하는 함수
  const onRemove = (id) => {
    // users state에서 id가 id인 데이터 삭제
    setUsers(users.filter((user) => user.id !== id));
  };
  // 수정하는 메서드
  // id에 해당하는 데이터의 active 속성의 값을 반전
  const onToggle = (id) =>
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default App;
