import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

    const [isLiked, setIsLiked] = React.useState(false)

    function handleCardLike() {
        if( isLiked === false) {
            setIsLiked(true)
        }
        else{setIsLiked(false)}
    }

    const cardLikeButtonClassName = `movies-card__like-button ${
        isLiked ? "movies-card__like-button_active" : " "
      }`;

    return(
        <div className='movies-card'>
            <img src={props.image} alt={props.nameRU} className='movies-card__poster'/>
            <div className='movies-card__container'>
                <div className='movies-card__description'>
                    <h2 className='movies-card__description_title'>{props.nameRU}</h2>
                    <p className='movies-card__description_subtitle'>{props.duration}</p>
                </div>
                <button
                    type="button"
                    className={cardLikeButtonClassName}
                    onClick={handleCardLike}>
                </button>
            </div>
        </div>
    )
}

export default MoviesCard;