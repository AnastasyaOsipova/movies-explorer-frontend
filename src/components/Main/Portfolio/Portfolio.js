import React from 'react';
import './Portfolio.css';

function Portfolio(){
    return(
        <section className='portfolio'>
             <h2 className='portfolio_subtitle'>
                Портфолио
            </h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>
                    <a href='https://github.com/AnastasyaOsipova/how-to-learn' target='_blank' className='portfolio__link_text'>Статичный сайт</a>
                    <a href='https://github.com/AnastasyaOsipova/how-to-learn' target='_blank' className='portfolio__link_text'>↗</a>
                </li>
                <li className='portfolio__link'>
                    <a href='https://github.com/AnastasyaOsipova/yet-another-project' target='_blank' className='portfolio__link_text'>Адаптивный сайт</a>
                    <a href='https://github.com/AnastasyaOsipova/yet-another-project' target='_blank' className='portfolio__link_text'>↗</a>
                </li>
                <li className='portfolio__link'>
                    <a href='https://github.com/AnastasyaOsipova/react-mesto-api-full' target='_blank' className='portfolio__link_text'>Одностраничное приложение</a>
                    <a href='https://github.com/AnastasyaOsipova/react-mesto-api-full' target='_blank' className='portfolio__link_text'>↗</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;