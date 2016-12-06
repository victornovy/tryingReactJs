import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import firebase from '../firebaseApp';

class UserStore extends EventEmitter {
    constructor() {
        super();
    }

    createUser(firstName, lastName, email) {
        var user = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email
        }
        firebase.push(user);
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_USER":
                this.createUser(action.firstName, action.lastName, action.email);
            break;
            default:
                console.error('Invalid ACTION');
        }
    }
}

const userStore = new UserStore;

dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
