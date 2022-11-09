import React from 'react';
import './Profile.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Profile(props) {
    return(
        <main className='profile'>
            <h2 className='profile__title'>
                Привет, {props.name}!
            </h2>
            <form className='profile__update-form'>
                <label className='profile__update-form_label profile__update-form_label_type_name'>
                    Имя
                    <input className='profile__update-form_input profile__update-form_input_type_name' 
                       id='name-input'
                       placeholder={props.name}
                       />
                </label>
                <ErrorMessage/>
                <label className='profile__update-form_label'>
                    E-mail
                    <input className='profile__update-form_input profile__update-form_input_type_email' 
                        id='email-input'
                        placeholder={props.email}
                        />
                </label>
                <ErrorMessage/>
                <button type='submit' className='profile__update-form_submit-button button'>Редактировать</button>
            </form>
            <button type='button' className='profile__logout-button button'>Выйти из аккаунта</button>
        </main>
    )
}

export default Profile;