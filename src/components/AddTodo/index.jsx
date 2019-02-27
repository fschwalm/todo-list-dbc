import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        description: ''
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.onAddTodo(this.state.description)
    }

    handleChangeDescription = (e) => {
        const description = e.target.value;
        this.setState( { description } );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTodo}>
                    <input data-testid="todo-input" onChange={this.handleChangeDescription} type="text"/>
                    <button data-testid="todo-button" type="submit">Adicionar</button>
                </form>                
            </div>
        );
    }
}

export default AddTodo;