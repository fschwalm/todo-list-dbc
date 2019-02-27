import React from "react";
import { render, wait, fireEvent } from "react-testing-library";
import App from "./App";

import mockGetTodosResponse from "./mocks/todos.json";
import mockCreatedTodo from "./mocks/createdTodo.json";
import { addTodo } from "./api";

jest.mock("./api", () => ({
  getTodos: jest.fn(() => Promise.resolve(mockGetTodosResponse)),
  addTodo: jest.fn(description =>
    Promise.resolve({ ...mockCreatedTodo, description })
  )
}));

describe("TODO LIST APP", () => {
  const inputValue = 'Todo description';

  it("should show the todo list in the dom", async () => {
    const { debug, getByText, getByTestId } = render(<App />);

    await wait(() => {
      expect(getByText(/finalizar dojo/i)).toBeInTheDocument();
    });
  });

  it("should create a todo", async () => {
    const { debug, getByText, getByTestId } = render(<App />);
    const input = getByTestId('todo-input');
    fireEvent.change(input, {target : {value : inputValue}});

    const button = getByTestId('todo-button');
    fireEvent.click(button)

    expect(addTodo).toHaveBeenCalledTimes(1);
    expect(addTodo).toHaveBeenCalledWith(inputValue);
    // await wait(() =>
    //   expect(getByTestId("greeting")).toHaveTextContent(`Hi Mary`)
    // );

    await wait(() => {
      expect(getByText(/Todo description/i)).toBeInTheDocument();
      // expect(getByText(/finalizar dojo/i)).toBeInTheDocument();
    });
  });
});
