import React from 'react';
import UserForm from './userForm';
import UserList from './userList';
import * as UserActions from './userActions';

export default class UserComponent extends React.Component {
    render() {
        return (
            <div>
                <UserForm />
                <UserList />
            </div>
        )
    }
}
