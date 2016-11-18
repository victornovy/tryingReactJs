import dispatcher from '../dispatcher';

export function createTodo(titleText, descriptionText) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        title: titleText,
        description: descriptionText
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}
