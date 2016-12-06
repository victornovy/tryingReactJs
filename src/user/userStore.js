import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import firebase from '../firebaseApp';

class UserStore extends EventEmitter {
    constructor() {
        super();
    }

    createUser() {
        console.log(firebase);
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_USER":
                this.createUser();
            break;
            default:
                console.error('Invalid ACTION');
        }
    }
}

const userStore = new UserStore;

dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
