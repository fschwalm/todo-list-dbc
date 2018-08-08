import React, { Component } from "react";
import * as TodoAPI from "./api";

class App extends Component {
  componentDidMount() {
    TodoAPI.addTodo("ir ao churras");
  }

  render() {
    return (
      <div className="App">
        <h1>TODO List - Dojo DBC Company</h1>
      </div>
    );
  }
}

export default App;
