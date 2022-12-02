import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

    return(
        <div className='main'>
        <Header loggedIn={props.loggedIn} onHeaderClick={props.onHeaderClick}/>    
        <main className='movies'>
            <SearchForm onSearchMovies={props.onSearchMovies}
                        isSelected={props.isSelected}
                        searchShortFilms={props.searchShortFilms}
                        searchAllFilms={props.searchAllFilms}
                        />
            <MoviesCardList cards={props.cards} isSaved={false} saveCard={props.saveCard} isLiked={props.isLiked} isMovies={true}/>
            <LoadMore />               
        </main>
        <Footer/>
        </div>
    )
}

export default Movies;