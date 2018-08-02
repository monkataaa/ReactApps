import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        // console.log(this.state);
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(callB => {
                // console.log(callB.message)
                // console.log(callB)
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

            <div className='login-page'> Login
                <p className='errorMsg'>{this.state.errMsg}</p>
                <form className='form'>
                    Email:
                    <input name='email' onChange={this.onValueChanged} /><br />
                    Password:
                    <input name='password' type='password' onChange={this.onValueChanged} />
                    <button onClick={this.onSubmitedForm}> Login </button>
                </form>
            </div>
        )
    }

}