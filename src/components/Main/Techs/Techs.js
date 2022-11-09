import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import './Techs.css';

function Techs() {
    return(
        <section className='techs' id='2'>
            <div className='techs__container'>
                <MainTitle>
                    Технологии
                </MainTitle>
                <div className='techs__text_container'>
                    <h2 className='techs__subtitle'>
                        7 технологий
                    </h2>
                    <p className='techs__text'>
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                </div>
                <div className='techs__info-graphics'>
                    <div className='techs__info-graphics_tab'>
                        <p>HTML</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>CSS</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>JS</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>React</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>Git</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>Express.js</p>
                    </div>
                    <div className='techs__info-graphics_tab'>
                        <p>mongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;