import React from 'react';

class Todo extends React.Component {
    render() {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1232,
                    title: "Title of todo test",
                    description: "description of todo test"
                },
                {
                    id: 12323,
                    title: "Title of todo test",
                    description: "description of todo test"
                }
            ]
        };
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
