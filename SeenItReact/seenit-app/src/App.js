import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import UnauthorizedHome from './components/auth.js/UnauthorizedHome';
import Home from './components/loggedUser/Home'


class App extends Component {
constructor (props){
  super(props)
  this.state = {
    isLoged : localStorage.getItem('token') !== null
  }
}

  render() {
console.log(this.state.isLoged);
    return (
        <BrowserRouter>
          <div>
            <Header />
           {this.state.isLoged === false ? <UnauthorizedHome/> :<Home />}
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
