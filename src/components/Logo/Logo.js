import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/header-logo.png';

function Logo(){
    return(
        <Link exact to='/' className='link'><img src={logo} alt='логотип' className='logo' /></Link>
    )
}

export default Logo;