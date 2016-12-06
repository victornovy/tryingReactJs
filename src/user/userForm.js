import React from 'react';
import Formsy from 'formsy-react';
import { TextField, RaisedButton } from 'material-ui';
import { FormsyText } from 'formsy-material-ui/lib';
import { MuiThemeProvider } from 'material-ui/styles';
import * as UserActions from './userActions';
import UserStore from './userStore';

export default class UserComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            disableSubmit: true
        };
    }

    enableButton() {
        console.info('Button Enable');
        this.setState({
            disableSubmit: false
        });
    };

    disableButton() {
        console.info('Disabled');
        this.setState({
            disableSubmit: true
        });
    }

    notifyFormError(data) {
        console.error('Form error:', data);
    };

    submitForm() {
        console.info('Can Submit');
        UserActions.createUser();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Formsy.Form
                        onValid={this.enableButton.bind(this)}
                        onInvalid={this.disableButton.bind(this)}
                        onValidSubmit={this.submitForm.bind(this)}
                        onInvalidSubmit={this.notifyFormError.bind(this)}
                    >
                        <FormsyText
                            name="firstName"
                            validations="isWords"
                            validationError="error"
                            required
                            hintText="First Name"
                            floatingLabelText="First Name"
                            style={{width: '50%'}}
                        />
                        <FormsyText
                            name="lastName"
                            validations="isNumeric"
                            validationError="err"
                            required
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            style={{width: '50%'}}
                        />
                        <FormsyText
                            name="email"
                            hintText="E-mail"
                            required
                            floatingLabelText="E-mail"
                            errorText="This field is required"
                            style={{width: '50%'}}
                        />
                        <RaisedButton
                            type="submit"
                            label="Submit"
                            disabled={this.state.disableSubmit}
                        />
                    </Formsy.Form>
                </div>
            </MuiThemeProvider>
        )
    }
}
