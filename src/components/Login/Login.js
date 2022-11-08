import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

function Login(){
    return(
        <LoginForm title={`Рады видеть!`}
                    button={`Войти`}
                    link={'/signup'}
                    question={`Ещё не зарегистрированы?`}
                    answer={`Регистрация`}
                    />
    )
}

export default Login;