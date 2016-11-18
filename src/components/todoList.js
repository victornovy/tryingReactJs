import React from 'react';
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
            todos: TodoStore.getAll()
        };
    }

    componentWillMount() {
        TodoStore.on('change', function() {
            this.setState({
                todos: TodoStore.getAll()
            });
        }.bind(this));
    }

    render() {
        const todoComponent = this.state.todos.map(function(todo) {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />
        });

        return(
            <div>{todoComponent}</div>
        )
    }
}
