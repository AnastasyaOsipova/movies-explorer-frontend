import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import './AboutProject.css';

function AboutProject(){
    return(
        <section className='about-project'>
            <MainTitle>
                О проекте
            </MainTitle>
            <div className='about-project__text-container' id='1'>
                <div className='about-project__two-columns'>
                    <h2 className='about-project__text_title'>
                        Дипломный проект включал 5 этапов
                    </h2>
                    <p className='about-project__text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-project__two-columns'>
                    <h2 className='about-project__text_title'>
                        На выполнение диплома ушло 5 недель
                    </h2>
                    <p className='about-project__text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__info-graphics'>
                <div className='about-project__info-graphics_tab'>
                    <div className='about-project__info-graphics_backend_tab'>
                        <p className='about-project__info-graphics_title'>
                            1 неделя
                        </p>
                    </div>
                    <div className='about-project__info-graphics_subtitle'>
                        <p>
                            Back-end
                        </p>
                    </div>
                </div>
                <div className='about-project__info-graphics_tab'>
                    <div className='about-project__info-graphics_frontend_tab'>
                        <p className='about-project__info-graphics_title'>
                            4 недели
                        </p>
                    </div>
                    <div className='about-project__info-graphics_subtitle'>
                        <p>
                            Front-end
                        </p>
                    </div>
                </div>
            </div>
            
        </section>

    )
}

export default AboutProject;