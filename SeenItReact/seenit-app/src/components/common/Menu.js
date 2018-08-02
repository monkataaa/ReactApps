import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
    <div id="menu">
        <div class="title">Navigation</div>
        <Link class="nav" to="/catalog">Catalog</Link>
        <Link class="nav" to="/submit">Submit Link</Link>
        <Link class="nav" to="/myPosts">My Posts</Link>
    </div>)

}

export default Menu