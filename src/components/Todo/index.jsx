import React from "react";

const Todo = props => {
  return (
    <li>
      <span>{props.todo.description}</span>
      <input
        onClick={() => props.onToggleTodo(props.todo)}
        defaultChecked={props.todo.done}
        type="checkbox"
      />
      <input
        type="button"
        onClick={() => props.onDeleteTodo(props.todo._id)}
        value="Delete"
      />
    </li>
  );
};

export default Todo;
