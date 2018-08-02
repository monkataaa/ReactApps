import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Catalog from './components/Catalog';
import Submit from './components/Submit';
import MyPosts from './components/MyPosts';
import Details from './components/Details';
import {Redirect} from 'react-router-dom'
import Logout from '../auth.js/Logout';

let ViewComponent = () => {
    return (
        <Switch>
            <Route exact path='/' component={Catalog}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/submit' component={Submit}/>
            <Route path='/myPosts' component={MyPosts}/>
            <Route path='/details/:id' component={Details}/>
            <Route path='/logout' component={Logout}/>
            <Redirect to='/'/>
        </Switch>
    )
}
export default ViewComponent