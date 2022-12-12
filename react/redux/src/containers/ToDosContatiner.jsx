import React from "react";
import { connect } from "react-redux";
import todos, { changeInput, insert, toggle, remove } from "../modules/todos";
import ToDos from "../components/ToDos";

const ToDosContatiner = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <ToDos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  { changeInput, insert, toggle, remove }
)(ToDosContatiner);
