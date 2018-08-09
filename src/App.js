import React, { Component } from "react";
import * as TodoAPI from "./api";
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    try {
      const todos = await TodoAPI.getTodos();
      this.setState({ todos });
    } catch (error) {
      console.log(error);
    }
  }

  handleToggleTodo = (todoId) => {
    // TodoAPI.updateTodo()
    console.log(todoId);
  }

  handleAddTodo = async (description) => {
    try {
      const createdTodod = await TodoAPI.addTodo(description);
      this.setState((prevState) => ({
        todos: [...prevState.todos, createdTodod]
      }))
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODO List - Dojo DBC Company</h1>
        <NewTodo onAddTodo={this.handleAddTodo} />
        <TodoList onToggleTodo={this.handleToggleTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
