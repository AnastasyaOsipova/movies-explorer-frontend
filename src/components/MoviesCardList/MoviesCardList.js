import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviePhoto from '../../images/movie1.jpg';

function MoviesCardList(props) {
    return(
        <section className='movies-card-list'>
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
                isSaved={props.isSaved}
            />
        </section>
    )
}

export default MoviesCardList;