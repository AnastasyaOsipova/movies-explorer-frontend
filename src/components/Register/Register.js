import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Register(){
    return(
        <LoginForm title={`Добро пожаловать!`}
                   button={`Зарегистрироваться`}
                   link={'/signin'}
                   question={`Уже зарегистрированы?`}
                   answer={`Войти`}>
            <label className='login-form__input-label'>Имя</label>
            <input type='text' 
                   required='true'
                   name='name'
                   id="name-input"
                   className="login-form__input login-form__input_type_name"
                   maxLength="40"/>
        <ErrorMessage/>
        </LoginForm>
    )
}

export default Register;