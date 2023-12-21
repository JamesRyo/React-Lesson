import React, { Component } from 'react'
import TodoList from '../components/TodoList';
import AddForm from '../components/AddForm';

class Home extends Component {
    state = {
        todos: [
            { id: 1, content: "Learn react js" },
            { id: 2, content: "Watch movie" },
        ]
    }

    addTodo = (todo) => {
        const todos = [...this.state.todos, todo]; //spread operator ...
        this.setState({ todos });
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id); //es6 filter method
        this.setState({ todos });
    }

    render(){
        console.log(this.props);
        const { todos } = this.state; //destructuring objects
        return (
            <div className="container">
                <TodoList deleteTodo={this.deleteTodo} todos={todos} />
                <AddForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default Home
