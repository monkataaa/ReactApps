import React, { Component } from 'react';
import dataCollector from './../utils/DataCollector'
import reqHandler from './../utils/reqHandler'
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
    this.dataCollector = (e) => {
        this.setState(dataCollector(e))
    }
    this.submitData = (e) => {
        e.preventDefault()
        reqHandler.login(this.state)
            .then((data) => {
                localStorage.setItem('token', data._kmd.authtoken)
                localStorage.setItem('author', data.username)
                this.props.history.push('/catalog')
            }).catch(err => console.log(err))
            
    }
    }
    
    
    render() {
        return (
            <form id="loginForm" onSubmit={this.submitData}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        );
    };
}

export default Login