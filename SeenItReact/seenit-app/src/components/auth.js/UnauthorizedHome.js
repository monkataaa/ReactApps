import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import About from './About';

class Home extends Component {
    render() {
        return (
            <section id="viewWelcome">
            <div className="welcome">
                <div className="signup">
                    <Login />
                    <Register />
                </div>

              <About />
            </div>
        </section>
        );
    }
}

export default Home;