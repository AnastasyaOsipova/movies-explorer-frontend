import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

    
    function handleCardLike(e) {
        props.saveCard(props.card);
    }

    function handleDelete(e) {
        props.deleteCard(props.card);
    }

    function setDuration() {
        let hours = Math.floor(props.duration / 60);
        let minutes = Math.floor(props.duration - hours *60);
        if (minutes > 0 && hours > 0) {
            return `${hours} ч ${minutes}м`
        }
        if (hours > 0 && minutes === 0) {
            return `${hours} ч`
        }
        if (hours === 0 && minutes) {
            return `${minutes}м`
        }
    }

    const cardLikeButtonClassName = `movies-card__like-button ${
        props.isLiked ? "movies-card__like-button_active" : " "
      }`;

    const cardButtonClassName = `movies-card__delete-button`

    return(
        <div className='movies-card'>
            <a href={props.trailerLink} target='_blank'>
                <img src={props.image} alt={props.nameRU} className='movies-card__poster'/>
            </a>
            <div className='movies-card__container'>
                <div className='movies-card__description'>
                    <h2 className='movies-card__description_title'>{props.nameRU}</h2>
                    <p className='movies-card__description_subtitle'>{setDuration()}</p>
                </div>
                <button
                    type="button"
                    className={props.isSaved ? cardButtonClassName : cardLikeButtonClassName}
                    onClick={props.isSaved ? handleDelete : handleCardLike}>
                </button>
            </div>
        </div>
    )
}

export default MoviesCard;