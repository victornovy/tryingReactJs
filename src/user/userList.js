import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import * as UserActions from './userActions';
import UserStore from './userStore';

export default class UserComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            users: []
        };

        this.findUsers = this.findUsers.bind(this);
    }

    setLoading(isLoading = false) {
        this.setState({
            isLoading: isLoading
        });
    }

    findUsers() {
        debugger;
        this.setState({
            users: UserStore.findUsers()
        });
    }

    componentWillMount() {
        UserStore.on('change', this.findUsers);
    }

    componentDidMount() {
        this.setLoading();
        UserActions.reloadUsers();
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.findUsers);
        debugger;
    }

    render() {
        let table, tableBody = <TableBody></TableBody>;

        const TABLE_HEADER =
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>E-mail</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                </TableRow>
            </TableHeader>
        ;

        const IS_LOADING = this.state.isLoading;

        if (!IS_LOADING) {
            tableBody =
                <TableBody>
                    {this.state.users.map( (row, index) =>
                        <TableRow key={index}>
                            <TableRowColumn>{row.email}</TableRowColumn>
                            <TableRowColumn>{row.firstName}</TableRowColumn>
                            <TableRowColumn>{row.lastName}</TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            ;
        }

        table =
            <Table>
                {TABLE_HEADER}
                {tableBody}
            </Table>
        ;

        return (
            <MuiThemeProvider>
                {table}
            </MuiThemeProvider>
        )
    }
}
