import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

    const [isLiked, setIsLiked] = React.useState(false)

    
    function handleCardLike(e) {
        props.saveCard(props.card);
        setIsLiked(props.isLiked)
    }

    function handleDelete(e) {
        props.deleteCard(props.card);
    }



    const cardLikeButtonClassName = `movies-card__like-button ${
        isLiked ? "movies-card__like-button_active" : " "
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
                    <p className='movies-card__description_subtitle'>{props.duration}</p>
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