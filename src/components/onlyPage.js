import React from 'react';

export default class OnlyPage extends React.Component {
    render () {
        console.log(this.props);
        const { routeParam } = this.props.params;
        const { query } = this.props.location;
        return (
            <div>
                <h3>Param: {routeParam}</h3>
                <h3>Location - Query: {query.name}</h3>
                <p>This page exists only to show an example of route with params</p>
            </div>
        )
    }
}
