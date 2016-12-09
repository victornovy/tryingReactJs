import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Material from './components/materialUI';
import StateXProps from './components/stateXProps';
import Event from './components/event';
import SinglePage from './components/singlePage';
import OnlyPage from './components/onlyPage';
import TodoList from './components/todoList';
import User from './user/user';

const example = document.getElementById('example');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={SinglePage}>
            <IndexRoute component={Material}></IndexRoute>
            <Route path="event" component={Event}></Route>
            <Route path="onlyPage(/:routeParam)" component={OnlyPage}></Route>
            <Route path="stateXProps" component={StateXProps}></Route>
            <Route path="material" component={Material}></Route>
            <Route path="todoList" component={TodoList}></Route>
            <Route path="user" component={User}></Route>
        </Route>
    </Router>,
    example
);
