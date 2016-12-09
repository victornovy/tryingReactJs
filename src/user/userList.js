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
    }

    setLoading(isLoading = false) {
        this.setState({
            isLoading: isLoading
        });
    }

    findUsers() {
        this.setState({
            users: UserStore.findUsers()
        });
    }

    componentWillMount() {
        UserActions.reloadUsers();
        UserStore.on('change', this.findUsers.bind(this));
    }

    componentDidMount() {
        this.setLoading();
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.findUsers.bind(this));
    }

    render() {
        let table, tableBody = <span></span>;

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