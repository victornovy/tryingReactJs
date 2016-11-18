import React from 'react';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../store/TodoStore';

class Todo extends React.Component {
    render() {
        return(
            <dl>
                <dt>{this.props.title}</dt>
                <dd>{this.props.description}</dd>
            </dl>
        )
    }
}

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
            title: '',
            description: ''
        };
    }

    componentWillMount() {
        TodoStore.on('change', function() {
            this.setState({
                todos: TodoStore.getAll()
            });
        }.bind(this));
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    createTodo() {
        TodoActions.createTodo(this.state.title, this.state.description);
    }

    render() {
        const todoComponent = this.state.todos.map(function(todo) {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />
        });

        return(
            <div>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} />
                <button onClick={this.createTodo.bind(this)}>Create Todo</button>
                <h4>TODOS</h4>
                {todoComponent}
            </div>
        )
    }
}
