import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li onClick={() => props.onToggleTodo(todo._id)} key={todo._id}>
          {todo.description} <input checked={todo.done} type="checkbox" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
