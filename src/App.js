import React, { Component } from "react";
import * as TodoAPI from "./api";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const todos = await TodoAPI.getTodos();
      this.setState({ todos });
    } catch (error) {
      console.log(error);
    }
  }

  handleToggleTodo = async toggledTodo => {
    try {
      await TodoAPI.updateTodo(toggledTodo);
      const todos = this.state.todos.map(todo => {
        if (todo._id !== toggledTodo._id) {
          return todo;
        }
        return {
          ...todo,
          done: !todo.done
        };
      });

      this.setState({ todos });
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteTodo = async todoId => {
    try {
      await TodoAPI.deleteTodo(todoId);
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo._id !== todoId)
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleAddTodo = async description => {
    try {
      const createdTodo = await TodoAPI.addTodo(description);
      this.setState(prevState => ({
        todos: [...prevState.todos, createdTodo]
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List - Dojo DBC Company</h1>
        <AddTodo onAddTodo={this.handleAddTodo} />
        <TodoList
          onDeleteTodo={this.handleDeleteTodo}
          onToggleTodo={this.handleToggleTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
