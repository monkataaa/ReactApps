import React, { Component } from 'react';
import reqHandler from '../utils/reqHandler';
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Catalog from '../loggedUser/components/Catalog';


class Register extends Component {
    constructor(props) {
        super(props);
        this.dataCollector = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        this.submitData = (e) => {
            e.preventDefault()
            reqHandler.register(this.state)
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data._kmd.authtoken)
                localStorage.setItem('author', data.username)
                return <Catalog />
            }).catch(err => console.log(err))
                
        }
    }

    render() {
        return (
            <form id="registerForm" onSubmit={this.submitData}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" />
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        );
    }
}

export default Register;