import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

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

    createTodo(titleText, descriptionText) {
        const id = Date.now();
        this.todos.push({
            id: id,
            title: titleText,
            description: descriptionText
        });

        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        console.log("TodoStore received an action", action);
        switch (action.type) {
            case "CREATE_TODO":
                this.createTodo(action.title, action.description);
                break;
            default:
                console.error('Invalid ACTION');
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
