import React from 'react';
import logo from '../../images/header-logo.png';
import { NavLink, Link, Route, Switch, withRouter } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import LoginLinks from '../LoginLinks/LoginLinks';
import Logo from '../Logo/Logo';

function Header(props){

       return(
        <header className='header'>
            <Logo />
            {!props.isLogged ? <LoginLinks/> : <Navigation onClick={props.onClick}/>}
                  
        </header>
    )
}

export default Header;