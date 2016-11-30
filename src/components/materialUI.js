import React from 'react';

import { IconButton, TextField } from 'material-ui';

import { deepOrange500, blue900, teal50 } from 'material-ui/styles/colors';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles'

import { FloatingActionButton, RaisedButton, FlatButton } from 'material-ui';
import { Paper, Menu, MenuItem, Divider } from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const style = {
  marginRight: 20,
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: blue900,
    canvasColor: teal50,
  },
});

export default class Material extends React.Component {
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
                    <br />
                    <IconButton
                      iconClassName="material-icons"
                      tooltipPosition="bottom-right"
                      tooltip="Test ToolTip"
                    >
                      Tooltip
                    </IconButton>
                    <br />
                    <RaisedButton
                        label="Raised Button"
                        secondary={true}
                        onTouchTap={this.handleTouchTap}
                     />
                     <br />
                     <Paper style={style}>
                     <Menu>
                        <MenuItem primaryText="Maps" />
                        <MenuItem primaryText="Books" />
                        <Divider />
                        <MenuItem primaryText="Flights" />
                        <MenuItem primaryText="Apps" />
                      </Menu>
                    </Paper>
                    <br />
                    <FlatButton
                      label="Ok"
                      disabled={true}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
