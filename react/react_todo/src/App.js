/*
 * useRef는 변수를 생성하거나 변수를 만들어서 DOM에 할당하기 위해
 * useCallback은 함수를 효율적으로 생성하기 위해
 */
import { useRef, useCallback, useReducer } from "react";

import ToDoTemplate from "./components/ToDoTemplate";
import ToDoInsert from "./components/ToDoInsert";
import ToDoList from "./components/ToDoList";

// 대량의 데이터를 생성해서 리턴하는 함수
const createBulkTodos = () => {
  const arr = [];

  for (let i = 1; i < 5000; i++) {
    arr.push({
      id: i,
      text: `To Do ${i}`,
      checked: false,
    });
  }
  return arr;
};

// state를 조작할 reducer 함수 생성
const todoReducer = (todos, action) => {
  // 분기
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    /*
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );*/
    default:
      return todos;
  }
};

function App() {
  /*
   * useState에 데이터를 생성하는 함수를 대입할 때,
   * 함수 호출 구문을 대입하면 데이터가 만들어질 때마다 리렌더링한다.
   * 함수 이름을 대입해야 함수를 전부 수행하고 한 번만 리 렌더링 수행
   */
  //const [todos, setTodos] = useState(createBulkTodos);
  // 리듀서 설정 -첫번째 매개변수는 호출될 함수
  // 두번째 매개변수는 초깃값
  // 세번째 매개변수는 호출할 메서드로 리턴한느 값이 초깃값으로 설정됨

  // 리ㅎ턴할 결과는 state 이름과 state를 수정할 함수
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  /* 더미 데이터
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "pre-commit 설정",
      checked: false,
    },
    {
      id: 2,
      text: "개인 서비스 구체화",
      checked: true,
    },
    {
      id: 3,
      text: "이미지 첨부 도입",
      checked: true,
    },
  ]);
  */

  // id를 위한 변수 생성
  // const nextId = useRef(4);
  const nextId = useRef(5001);

  /*
   * 삽입을 처리하기 위한 함수
   * todos에 변화가 생기면 함수를 만들고,
   * 그렇지 않으면 기존 함수를
   */
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    // 함수형 업데이트
    //setTodos((todos) => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  // 데이터 삭제를 위한 함수
  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  // 데이터 수정을 위한 함수
  const onToggle = useCallback((id) => {
    /*
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );*/
    dispatch({ type: "TOGGLE" }, id);
  }, []);

  return (
    <ToDoTemplate>
      <ToDoInsert onInsert={onInsert}></ToDoInsert>
      <ToDoList
        todos={todos}
        onRemove={onRemove}
        nb
        onToggle={onToggle}
      ></ToDoList>
    </ToDoTemplate>
  );
}

export default App;
