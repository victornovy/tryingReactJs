import dispatcher from '../dispatcher';

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
