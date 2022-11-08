import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './LoginLinks.css';

function LoginLinks(){
    return(
        <div className='login-links'>
                    <Link to='/signup' className='login-link link'>
                        Регистрация
                    </Link>
                    <Link to='/signin' className='sign-in_link link'>
                        Войти
                    </Link>
        </div>
    )
}

export default LoginLinks;