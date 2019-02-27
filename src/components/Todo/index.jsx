import React from "react";

const Todo = props => {
  return (
    <li>
      <span data-testid={props.todo._id}>{props.todo.description}</span>
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
