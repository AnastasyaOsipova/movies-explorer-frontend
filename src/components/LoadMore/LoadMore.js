import React from 'react';
import DeviderBlock from '../DeviderBlock/DeviderBlock';
import './LoadMore.css';

function LoadMore(props) {

    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))

    return(
        <DeviderBlock>
            <button onClick={props.handleLoadMore} className={`movies__load-more_button ${foundMovies && props.cards.length < foundMovies.length ? 'movies__load-more_button_active' : ''}`}>
                Ещё
            </button>
        </DeviderBlock>
    )
}

export default LoadMore;