import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import Logo from '../Logo/Logo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function LoginForm(props){
    return(
        <main className='login'>
        <div className='login__logo-container'>
        <Logo/>
        </div>
        <form className='login-form'>
            <h2 className='login-form__title'>{props.title}</h2>
            {props.children}
            <label className='login-form__input-label'>E-mail</label>
            <input type='email' 
                   required='true'
                   name='email'
                   id="email-input"
                    className="login-form__input login-form__input_type_email"
                    maxLength="40"/>
            <ErrorMessage/>
            <label className='login-form__input-label'>Пароль</label>
            <input type='password' 
                   required='true'
                   name='password'
                   id="password-input"
                    className="login-form__input login-form__input_type_password"
                    minLength="10"
                    maxLength="200"/>
            <ErrorMessage/>
            <button className='login-form__button'>{props.button}</button>
            <Link to={props.link} className='login-form__link'>{props.question}
            <span className='login-form__link_highlited login-form__link'>{props.answer}</span>
            </Link>
        </form>
        </main>
    )
}

export default LoginForm;