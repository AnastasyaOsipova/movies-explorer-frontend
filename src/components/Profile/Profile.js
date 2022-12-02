import React from 'react';
import './Profile.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { useFormWithValidation } from '../../utils/validation';

function Profile(props) {
  
  const validation = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    validation.setValues({name: currentUser.name, email:currentUser.email})
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(validation.values.name, validation.values.email)

  }


    return(
        <div className='main'>
        <Header loggedIn={props.loggedIn} onHeaderClick={props.onHeaderClick}/> 
        <main className='profile'>
            <h2 className='profile__title'>
                Привет, {currentUser.name}!
            </h2>
            <form className='profile__update-form' onSubmit={handleSubmit}>
                <label className='profile__update-form_label profile__update-form_label_type_name'>
                    Имя
                    <input className='profile__update-form_input profile__update-form_input_type_name' 
                       id='name-input'
                       name='name'
                       value={validation.values.name}
                       onChange={validation.handleChange}
                       minLength={3}
                       type='text'
                       />
                </label>
                <ErrorMessage/>
                <label className='profile__update-form_label'>
                    E-mail
                    <input className='profile__update-form_input profile__update-form_input_type_email' 
                        id='email-input'
                        name='email'
                        value={validation.values.email}
                        onChange={validation.handleChange}
                        type='email'
                        />
                </label>
                <ErrorMessage/>
                <button type='submit' 
                        className={`profile__update-form_submit-button ${
                            validation.isValid ? 'profile__update-form_submit-button_active' : ''
                            }`}
                        disabled={!validation.isValid}>
                    Редактировать
                    </button>
            </form>
            <button type='button' 
                    className='profile__logout-button button'>
                    Выйти из аккаунта
                    </button>
        </main>
        <Footer />
        </div>
    )
}

export default Profile;