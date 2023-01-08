import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './LoginForm.css';
import Logo from '../Logo/Logo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormWithValidation } from '../../utils/validation';
import * as auth from "../../utils/auth";

function LoginForm(props){ 

    const validation = useFormWithValidation();

    const history=useHistory()


    function logIn(token) {
        localStorage.setItem("token", token);
        props.handleLogin();
        history.push("/movies");
  }

    function handleRegisterSubmit(e) {
        e.preventDefault();
        auth
          .register(validation.values.name, validation.values.email, validation.values.password)
          .then((res) => {
              if(res.token) {
                logIn(res.token)
                
              }
              else{
                props.openErrorPopup()
              }
          })
          .catch((err) => {
            props.openErrorPopup()
          })    
      }

    

    function handleAuthSubmit(e){
        e.preventDefault();
        auth
      .authorize(validation.values.email, validation.values.password)
      .then((res) => {
        if (res.token) {
          logIn(res.token);
        }
        else {
        props.openErrorPopup();   
        }
      })
      .catch(() => {
        props.openErrorPopup()
      });
    }

    return(
        <main className='login'>
        <div className='login__logo-container'>
        <Logo/>
        </div>
        <form className='login-form' onSubmit={props.isRegister ? handleRegisterSubmit : handleAuthSubmit}>
            <h2 className='login-form__title'>{props.title}</h2>
            {props.isRegister ? 
            <div className='login-form__input-container'>
                <label className='login-form__input-label'>Имя</label>
                <input type='text' 
                    required={true}
                    name='name'
                    value={validation.values.value}
                    id="name-input"
                    className="login-form__input login-form__input_type_name"
                    onChange={validation.handleChange}
                    minLength={3}
                     />
            <ErrorMessage isActive={validation.errors.name} message={`Введите имя`}/>
            </div> 
            : ''}
            <div className='login-form__input-container'>
            <label className='login-form__input-label'>E-mail</label>
            <input type='email' 
                   value={validation.values.value}
                   required={true}
                   name='email'
                   id="email-input"
                   className="login-form__input login-form__input_type_email"
                   maxLength="40"
                   onChange={validation.handleChange}/>
            <ErrorMessage isActive={validation.errors.email} message={`Введите корректный email`}/>
            </div>
            <div className='login-form__input-container'>
            <label className='login-form__input-label'>Пароль</label>
            <input type='password'
                   value={validation.values.value} 
                   required={true}
                   name='password'
                   id="password-input"
                    className="login-form__input login-form__input_type_password"
                    minLength="5"
                    maxLength="200"
                    onChange={validation.handleChange}/>
            <ErrorMessage isActive={validation.errors.password} message={`Введите пароль`}/>
            </div>
            <button className={`login-form__button  ${
                                validation.isValid ? 'login-form__button_active' : ''
                                }`}
                                disabled={!validation.isValid}
                                type='submit'>
                                {props.button}
                                </button>
            <Link to={props.link} className='login-form__link'>{props.question}
            <span className='login-form__link_highlited login-form__link'>{props.answer}</span>
            </Link>
        </form>
        </main>
    )
}

export default LoginForm;