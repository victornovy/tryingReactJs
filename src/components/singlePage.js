import React from 'react';
import { Link } from 'react-router';

export default class SinglePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Single Page</h1>
                <Link to="event"><button>Event</button></Link>
                <Link to="stateXProps"><button>State X Props</button></Link>
                <Link to="material"><button>Material</button></Link>
                <Link to="onlyPage"><button>Router Page</button></Link>
                <Link to="todoList"><button>Todo List</button></Link>
                {this.props.children}
            </div>
        );
    }
}
