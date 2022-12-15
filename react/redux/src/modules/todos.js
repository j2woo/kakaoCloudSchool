const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
// 샘플 데이터를 2개 삽입할 거라서 3
let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: toggle,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "Node",
      done: true,
    },
    {
      id: 2,
      text: "React",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    case INSERT:
      return { ...state, todos: state.todos.concat(action.todo) };
    case TOGGLE:
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;