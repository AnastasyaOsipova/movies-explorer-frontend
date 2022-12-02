import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import DeviderBlock from '../DeviderBlock/DeviderBlock';

function SavedMovies() {
    return(
        <main className='movies'>
            <SearchForm />
            <MoviesCardList isSaved={true}/>
            <DeviderBlock />
                       
        </main>
    )
}

export default SavedMovies;