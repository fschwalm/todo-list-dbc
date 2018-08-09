const BASE_URL = "http://localhost:3003/api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const getTodos = () => fetch(`${BASE_URL}/todos`).then(res => res.json());

const addTodo = description =>
  fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers,
    body: JSON.stringify({ description })
  })
    .then(res => res.json())
    .then(data => data);

const updateTodo = todo =>
  fetch(`${BASE_URL}/todos/${todo._id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers
  })
    .then(res => res.json())
    .catch(error => error);

const deleteTodo = todoId =>
  fetch(`${BASE_URL}/todos/${todoId}`, {
    method: "DELETE",
    headers
  })
    .then(res => res.json())
    .catch(error => error);

export { getTodos, addTodo, updateTodo, deleteTodo };
