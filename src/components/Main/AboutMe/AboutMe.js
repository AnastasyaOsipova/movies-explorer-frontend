import React from 'react';
import {Link} from 'react-router-dom';
import MainTitle from '../MainTitle/MainTitle';
import './AboutMe.css'
import photo from '../../../images/student-photo.jpg';

function AboutMe(){
    return(
        <div className='about-me' id='3'>
            <MainTitle>
                Студент
            </MainTitle>
            <div className='about-me__info-container'>
                <div className='about-me__text-container'>
                    <h3 className='about-me__subtitle'>
                        Виталий
                    </h3>
                    <h4 className='about-me__subline'>
                        Фронтенд-разработчик, 30 лет
                    </h4>
                    <p className='about-me__text'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href='https://github.com/AnastasyaOsipova' className='about-me__github-link'>
                        Github
                    </a>
                </div>
                <img className='about-me__image' src={photo} alt='student portrait'/>
            </div>
        </div>
    )
}

export default AboutMe;