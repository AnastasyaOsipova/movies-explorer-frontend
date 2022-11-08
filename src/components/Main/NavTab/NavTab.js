import React from 'react';
import './NavTab.css';

function NavTab() {
    return(
        <div className='promo__nav-container'>
            <a href='#1' className='promo__nav-link'>
            О проекте
        </a>
        <a href='#2' className='promo__nav-link'>
            Технологии
        </a>
        <a href='#3' className='promo__nav-link'>
            Студент
        </a>
        </div>
    )
}

export default NavTab;