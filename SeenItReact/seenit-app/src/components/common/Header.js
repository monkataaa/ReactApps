import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <span class="logo">☃</span><span class="header">SeenIt</span>
            <div id="profile"><span>{localStorage.getItem('author')}</span>|<Link to="/logout">logout</Link></div>
        </header>
    )
}

export default Header