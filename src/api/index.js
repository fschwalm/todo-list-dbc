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
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to add");
  });

const updateTodo = todo =>
  fetch(`${BASE_URL}/todos/${todo._id}`, {
    method: "PUT",
    body: JSON.stringify({ done: !todo.done }),
    headers
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to update");
  });

const deleteTodo = todoId =>
  fetch(`${BASE_URL}/todos/${todoId}`, {
    method: "DELETE",
    headers
  }).then(response => {
    if (response.ok) {
      return response;
    }
    throw new Error("Failed to delete");
  });

export { getTodos, addTodo, updateTodo, deleteTodo };
