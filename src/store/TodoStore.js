import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1232,
                title: "Title of todo test",
                description: "description of todo test"
            },
            {
                id: 12323,
                title: "Title of todo test 1",
                description: "description of todo test 1"
            }
        ];
    }

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;
