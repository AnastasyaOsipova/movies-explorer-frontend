import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';

function Movies(props) {


    React.useEffect(() =>{
        const checkboxStatus = JSON.parse(localStorage.getItem('isCheckboxSelected'));
        if (checkboxStatus) {
          props.setIsCheckboxSelected(checkboxStatus)
        }
        else {
          props.setIsCheckboxSelected(false)
        }},
        []);

    React.useEffect(() =>{
        mainApi.getSavedMovies()
        .then((res) => props.handleSetSavedCards(res))
        .catch((err) => {
            console.log(err)
          });
      },
      []);  


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
            <LoadMore handleLoadMore={props.handleLoadMore} cards={props.cards}/>               
        </main>
        <Footer/>
        </div>
    )
}

export default Movies;