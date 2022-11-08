import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import LoadMore from '../LoadMore/LoadMore';

function Movies() {
    return(
        <div className='movies'>
            <SearchForm />
            <MoviesCardList />
            <LoadMore />
            <Footer />
                       
        </div>
    )
}

export default Movies;