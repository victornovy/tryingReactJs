import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import firebase from '../firebaseApp';

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }

    reloadUsers(users) {
        var keys = Object.keys(users), newUsers = [];
        keys.forEach(function(value, index) {
            users[value].id = value;
            newUsers.push(users[value]);
        });
        
        this.users = newUsers;
        return newUsers;
    }

    findUsers() {
        return this.users;
    }

    createUser(firstName, lastName, email) {
        var user = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email
        };
        firebase.push(user);
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_USER":
                this.createUser(action.firstName, action.lastName, action.email);
            break;
            case 'FIND_USERS':
                this.findUsers();
            break;
            case 'RELOAD_USERS':
                this.reloadUsers(action.users);
                this.emit('change');
            break;
            default:
                console.error('Invalid ACTION (User Store)');
        }
    }
}
const userStore = new UserStore;

var index = dispatcher.register(userStore.handleActions.bind(userStore));
userStore.dispatcherIndex = index;

export default userStore;
