import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

function Login(props){
    return(
        <LoginForm title={`Рады видеть!`}
                    button={`Войти`}
                    link={'/signup'}
                    question={`Ещё не зарегистрированы?`}
                    answer={`Регистрация`}
                    handleLogin={props.handleLogin}
                    openErrorPopup={props.openErrorPopup}
                    />
    )
}

export default Login;