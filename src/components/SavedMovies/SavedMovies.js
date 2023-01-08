import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import DeviderBlock from '../DeviderBlock/DeviderBlock';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';


function SavedMovies(props) {

    React.useEffect(() =>{
          props.setIsCheckboxSelected(false)
        },
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
            <SearchForm isSelected={props.isSelected}
                        searchShortFilms={props.searchShortFilms}
                        searchAllFilms={props.searchAllFilms}
                        isSaved={true}
                        onSearchMovies={props.onSearchMovies}/>
            <MoviesCardList savedCards={props.savedCards} isSaved={true} deleteCard={props.deleteCard}/>
            <DeviderBlock />
        </main>
        <Footer/>
        </div>
    )
}

export default SavedMovies;