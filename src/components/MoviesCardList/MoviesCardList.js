import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviePhoto from '../../images/movie1.jpg';

function MoviesCardList() {
    return(
        <div className='movies-card-list'>
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
            <MoviesCard 
                image={MoviePhoto}
                nameRU={`Киноальманах «100 лет дизайна»`}
                duration={`1ч 47м`}
            />
        </div>
    )
}

export default MoviesCardList;