const BASE_URL = "http://localhost:3003/api";

const getTodos = () => fetch(`${BASE_URL}/todos`).then(res => res.json());

const addTodo = description =>
  fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({ description })
  })
    .then(res => res.json())
    .then(data => data);

const updateTodo = todo =>
  fetch(`${BASE_URL}/todos/${todo._id}`, {
    method: "PUT",
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
    .catch(error => error);

const deleteTodo = todoId =>
  fetch(`${BASE_URL}/todos/${todoId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .catch(error => error);

export { getTodos, addTodo, updateTodo, deleteTodo };
