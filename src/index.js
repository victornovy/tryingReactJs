import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import {deepOrange500, blue900, teal50} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const style = {
  marginRight: 20,
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: blue900,
    canvasColor:teal50,
  },
});


class Layout extends React.Component {

    state = {
        isMini: true
    };

    changeMiniState = function(isMini) {
        this.setState({isMini: !isMini});
    };

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <h1>It works!</h1>
                    <TextField hintText="Hint Text" />
                    <br />
                    <FloatingActionButton mini={this.state.isMini} style={style} onTouchTap={() => this.changeMiniState(this.state.isMini)}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

const example = document.getElementById('example');

ReactDOM.render(<Layout />, example);