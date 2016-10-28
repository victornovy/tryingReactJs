import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome'
        };
    }

    render() {
        setTimeout(function() {
            var next = Math.floor(Math.random() * 5);
            var titles = ['Hi', 'You', 'Hell', 'We', 'Sun'];
            this.setState({title: `Welcome ${titles[next]}`});
        }.bind(this), 1000)

        return (
            <h1>{this.props.title || this.state.title}</h1>
        );
    }
}

export default class StateXProps extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Title title={'Hell'} />
            </div>
        );
    }
}