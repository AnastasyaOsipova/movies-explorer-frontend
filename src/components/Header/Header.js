import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import LoginLinks from '../LoginLinks/LoginLinks';
import Logo from '../Logo/Logo';

function Header(props){

       return(
        <header className='header'>
            <Logo />
            {!props.loggedIn ? <LoginLinks/> : <Navigation onClick={props.onHeaderClick}/>}
                  
        </header>
    )
}

export default Header;