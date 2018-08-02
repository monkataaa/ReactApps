import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './LoginForm.css'
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';
import Pokemons from './Pokemons';
import LoginRegister from './LoginRegister';
// import pokedex from '../../data/pokemons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: localStorage.getItem('token') !== null
    };
    this.changeLoginStatus = this.changeLoginStatus.bind(this)
    this.logoutFnc = this.logoutFnc.bind(this)
  }

  changeLoginStatus(check) {
    this.setState({ isLogged: check });
  }
  logoutFnc() {
    console.log('logout');
    localStorage.clear()
    this.setState({ isLogged: false });
  }

  render() {
    if (this.state.isLogged) {
      return (
        <div>
          <button onClick={this.logoutFnc}> Logout </button>
          <Pokemons />
        </div>)
    }

    return (
      <div className="App">
        <LoginForm changeLogStatus={this.changeLoginStatus} />
        <RegisterForm  changeLogStatus={this.changeLoginStatus}/>
      </div>

    );
  }
}

export default App;
