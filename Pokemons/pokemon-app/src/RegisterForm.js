import React, { Component } from 'react'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            errMsg: null
        }

        this.onValueChanged = this.onValueChanged.bind(this)
        this.onSubmitedForm = this.onSubmitedForm.bind(this)
    }
    onValueChanged(e) {
        let elemKey = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState[elemKey] = value
            return prevState
        });
    }
    onSubmitedForm(event) {
        event.preventDefault()
        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(callB => {
                if (callB.success) {
                    localStorage.setItem('token', callB.token)
                    this.props.changeLogStatus(true)
                } else {
                    this.setState({ errMsg: callB.message })
                }
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className='login-page' >Register Form
              <p className='errorMsg'>{this.state.errMsg}</p>
                <form className='form'>
                    Email:
                    <input name='email' onChange={this.onValueChanged} /><br />
                    {/* Confirm Email: 
                    <input namet="confirmedEmail"onChange={this.onValueChanged}/><br/> */}
                    Name:
                    <input name='name' onChange={this.onValueChanged} /><br />
                    Password:
                    <input name='password' type='password' onChange={this.onValueChanged} />
                    {/* Confirm Password: 
                    <input /><br/> */}
                    {/* I agree with the terms
                    <input type="checkbox"/> */}
                    <button onClick={this.onSubmitedForm}> Register </button>
                </form>
            </div>
        )
    }
}