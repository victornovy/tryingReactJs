import React from 'react';

class Event extends React.Component {

    handleChange(e) {
        const value = e.target.value;
        this.props.changeValue(value);
    }

    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <textarea value={this.props.value} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

export default class EventEx extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "Write you text."
        }
    }


    changeValue(value) {
        this.setState({value})
    }

    render() {
        return (
            <div>
                <Event changeValue={this.changeValue.bind(this)} value={this.state.value}/>
            </div>
        );
    }
}