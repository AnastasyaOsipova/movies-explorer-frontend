import React from 'react';
import './Portfolio.css';

function Portfolio(){
    return(
        <div className='portfolio'>
             <h2 className='portfolio_subtitle'>
                Портфолио
            </h2>
            <li className='portfolio__links'>
                <ul className='portfolio__link'>
                    <a href='#' className='portfolio__link_text'>Статичный сайт</a>
                    <a href='#' className='portfolio__link_text'>↗</a>
                </ul>
                <ul className='portfolio__link'>
                    <a href='#' className='portfolio__link_text'>Адаптивный сайт</a>
                    <a href='#' className='portfolio__link_text'>↗</a>
                </ul>
                <ul className='portfolio__link'>
                    <a href='#' className='portfolio__link_text'>Одностраничное приложение</a>
                    <a href='#' className='portfolio__link_text'>↗</a>
                </ul>
            </li>
        </div>
    )
}

export default Portfolio;