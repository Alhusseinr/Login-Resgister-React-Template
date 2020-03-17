import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            LName: '',
            Email: '',
            Password: ''
        }
    }

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Register"/>
                        <TextField
                            hintText="Enter Your First Name"
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({FName: newValue})}
                        />
                        <br />
                        <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={(event, newValue) => this.setState({LName: newValue})}
                        />
                        <br />
                        <TextField
                            hintText="Enter Your Email"
                            floatingLabelText="Email"
                            type="email"
                            onChange={(event, newValue) => this.setState({Email: newValue})}
                        />
                        <br />
                        <TextField
                            hintText="Enter Your Password"
                            floatingLabelText="Password"
                            type="password"
                            onChange={(event, newValue) => this.setState({Password: newValue})}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

    handleClick(event){
        const apiBaseUrl = "YOUR API URI";

        console.log("values", this.state.FName, this.state.LName, this.state.Email, this.state.Password);
        const self = this;
        const payload = {
            "FName": this.state.FName,
            "LName": this.state.LName,
            "Email": this.state.Email,
            "Password": this.state.Password
        }

        axios
            .post(apiBaseUrl+'register', payload)
            .then((response) => {
                console.log(response);
                if(response.data.code === 200){
                    const loginScreen = [];
                    loginScreen.push(<Login parentContext={this} />);
                    const loginMessage = "Not Registered";
                    self.props.parentContext.setState({
                        loginScreen: loginScreen,
                        loginMessage: loginMessage,
                        buttonLabel: "Register",
                        isLogin: true
                    });
                }
            }).catch(function (error) {
                console.log(error)
            });
    }
}

const style = {
    margin: 15,
};

export default Register;
