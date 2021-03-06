import React from "react";
import Todo from "../Todo";

const TodoList = props => {
  return (
    <ul data-testid="list-todos">
      {props.todos.map(todo => (
        <Todo {...props} todo={todo} key={todo._id} />
      ))}
    </ul>
  );
};

export default TodoList;
