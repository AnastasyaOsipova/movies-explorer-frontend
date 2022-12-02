import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavigationPopup.css'

function NavigationPopup(props){
    return(
        <section className={`navigation-popup  ${
            props.isOpen ? "navigation-popup_opened" : ""
          }`}>
            <div className='navigation-popup__container'>
            <button
                onClick={props.onClose}
                type="button"
                className="navigation-popup__close-button link">
            </button>
            <div className='navigation-popup__links-container'>
                    <NavLink exact to='/' activeClassName='navigation-popup__nav-link_active' className='navigation-popup__link link'>
                        Главная
                    </NavLink>
                    <NavLink to='/movies' activeClassName='navigation-popup__nav-link_active' className='navigation-popup__link link'>
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' activeClassName='navigation-popup__nav-link_active' className='navigation-popup__link link'>
                        Сохранённые фильмы
                    </NavLink>
            </div>
            <Link to='/profile' className='navigation-popup__link navigation-popup__profile_link link'>
                Аккаунт
            </Link>
            </div>
            </section>
    )
}

export default NavigationPopup;