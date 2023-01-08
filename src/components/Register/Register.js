import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

function Register(props){
        
    
    return(

        <LoginForm title={`Добро пожаловать!`}
                   button={`Зарегистрироваться`}
                   link={'/signin'}
                   question={`Уже зарегистрированы?`}
                   answer={`Войти`}
                   isRegister={true}
                   openErrorPopup={props.openErrorPopup}
                   handleLogin={props.handleLogin}
                   >
            
        </LoginForm>
    )
}

export default Register;