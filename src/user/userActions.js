import dispatcher from '../dispatcher';
import firebase from '../firebaseApp';

export function createUser(firstNameText, lastNameText, emailText) {
    dispatcher.dispatch({
        type: 'CREATE_USER',
        firstName: firstNameText,
        lastName: lastNameText,
        email: emailText
    });
}

export function deleteUser(id) {
    dispatcher.dispatch({
        type: 'DELETE_USER',
        id
    });
}

export function findUsers(filter) {
    dispatcher.dispatch({
        type: 'FIND_USERS',
        filter
    });
}

export function reloadUsers() {
    firebase.on('value', function(res) {
        var users = res.val();
        dispatcher.dispatch({
            type: 'RELOAD_USERS',
            users
        });
    });
}
