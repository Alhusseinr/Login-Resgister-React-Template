import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from "./Register";

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            Password: '',
            loginScreen: [],
            loginMessage: [],
            buttonLabel: 'Register',
            isLogin: true
        }
    }

    componentWillMount() {
        const loginScreen = [];
        loginScreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
        const loginMessage = "Not registered yet";
        this.setState({
            loginScreen: loginScreen,
            loginMessage: loginMessage
        });
    }

    render() {
        return(
            <div className="loginScreen">
                {this.state.loginScreen}
                <div>
                    {this.state.loginMessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }

    handleClick(event){
        let loginMessage;
        if(this.state.isLogin){
            const loginScreen = [];
            loginScreen.push(<Register parentContext={this} />);
            loginMessage = "Already registered";
            this.setState({
                loginScreen: loginScreen,
                loginMessage: loginMessage,
                buttonLabel: "Login",
                isLogin: false
            })
        } else {
            const loginScreen = [];
            loginScreen.push(<Login parentContext={this}/>);
            loginMessage = "Not Registered";
            this.setState({
                loginScreen: loginScreen,
                loginMessage: loginMessage,
                buttonLabel: "Register",
                isLogin: true
            })
        }
    }
}

const style = {
    margin: 15,
};

export default LoginScreen;
