import React from 'react';
//import { NavLink, Link, Route, Switch, withRouter } from 'react-router-dom';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo(props) {
    return(
        <section className='promo'>
            <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
            </h1>
            <NavTab/>
        </section>
    )
}

export default Promo;