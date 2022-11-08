import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import DeviderBlock from '../DeviderBlock/DeviderBlock';

function SavedMovies() {
    return(
        <div className='movies'>
            <SearchForm />
            <MoviesCardList />
            <DeviderBlock />
            <Footer />
                       
        </div>
    )
}

export default SavedMovies;