import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import DeviderBlock from '../DeviderBlock/DeviderBlock';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return(
        <div className='main'>
        <Header loggedIn={props.loggedIn} onHeaderClick={props.onHeaderClick}/> 
        <main className='movies'>
            <SearchForm isSelected={props.isSelected}
                        searchShortFilms={props.searchShortFilms}
                        searchAllFilms={props.searchAllFilms}/>
            <MoviesCardList savedCards={props.savedCards} isSaved={true} deleteCard={props.deleteCard}/>
            <DeviderBlock />
        </main>
        <Footer/>
        </div>
    )
}

export default SavedMovies;