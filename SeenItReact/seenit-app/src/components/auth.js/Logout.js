import React from 'react';
import {Redirect} from 'react-router-dom'
import UnauthorizedHome from './UnauthorizedHome';


const Logout = () => {
    localStorage.clear()
    return (
        <UnauthorizedHome />
    )
}

export default Logout