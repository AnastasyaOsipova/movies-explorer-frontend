import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return(
        <section className='movies-card-list'>
            {props.isMovies ? props.cards.map((item) => (
                <MoviesCard
                    saveCard={props.saveCard}
                    card={item}
                    key={item.id}
                    trailerLink={item.trailerLink}
                    image={`https://api.nomoreparties.co${item.image.url}`}
                    nameRU={item.nameRU}
                    duration={`${item.duration}м`}
                    isSaved={props.isSaved}
                    isLiked={props.isLiked(item)}
                />
            )) :  props.savedCards.map((item) => (
                <MoviesCard
                    deleteCard={props.deleteCard}
                    card={item}
                    key={item.id}
                    trailerLink={item.trailerLink}
                    image={item.image}
                    nameRU={item.nameRU}
                    duration={`${item.duration}м`}
                    isSaved={props.isSaved}
                />
            ))}
        </section>
    )
}

export default MoviesCardList;