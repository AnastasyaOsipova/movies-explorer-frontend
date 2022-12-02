import React from 'react';
import { NavLink, Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Promo from '../Main/Promo/Promo';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';
import Preloader from '../Preloader/Preloader';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from "../../utils/auth";
import NothingFoundPopup from '../NothingFoundPopup/NothingFoundPopup';
import SomethingWentWrongPopup from '../SomethingWentWrongPopup/SomethingWentWrongPopup';
import WrongUserInfoPopup from '../WrongUserInfoPopup/WrongUserInfoPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/currentUserContext';



function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);

  const [isNothingFoundPopupOpen, setIsNothingFoundPopupOpen] = React.useState(false);

  const [isSomethingWentWrongPopupOpen, setIsSomethingWentWrongPopupOpen] = React.useState(false);

  const [isWrongUserInfoPopupOpen, setIsWrongUserInfoPopupOpen] = React.useState(false);

  const [isCheckboxSelected, setIsCheckboxSelected] = React.useState();

  const [cards, setCards] = React.useState([]);

  const [savedCards, setSavedCards] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [isCardLiked, setCardLiked] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(handleTokenCheck());

  function handleTokenCheck() {
    if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          console.log(loggedIn)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

      
  function searchFilms(movies, keyWord) {
    if (isCheckboxSelected === true)
      { const foundMovies = movies.filter(function(item) {return item.description.includes(keyWord.toLowerKeys())||item.nameRU.includes(keyWord.toLowerKeys()) });
        return foundMovies}
    else{const foundMovies = movies.filter(function(item) {return item.duration>40 && (item.description.includes(keyWord.toLowerKeys())||item.nameRU.includes(keyWord.toLowerKeys()))}); 
        return foundMovies}
  }

  
  function searchAllFilms() {
    setIsCheckboxSelected(true);
  }

  function searchShortFilms() {
    setIsCheckboxSelected(false);
  }

  function searchNewFilms(keyWord) {
    setIsLoading(true);
    moviesApi.getMovies()
    .then((data) => searchFilms(data, keyWord))
    .then((res) => localStorage.setItem('foundMovies', JSON.stringify(res)))
    .then(() => {const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
            if(foundMovies.length === 0){
              setIsNothingFoundPopupOpen(true)
            }
            else{
              setCards(foundMovies)
            };
     })
    .catch((err) => setIsSomethingWentWrongPopupOpen(true))
    .finally(() => setIsLoading(false))
  }

  function handleLogin() {
    setLoggedIn(true);
    console.log(loggedIn)
  }

  function getUser() {
    mainApi.getUserInfoApi()
    .then((res) => setCurrentUser(res))
    .catch((err) => console.log(err))
  }

  function updateUserInfo(name, email) {
    console.log(name, email);
    mainApi.updateUserInfo(name, email)
    .then((data) => setCurrentUser(data))
    .catch(() => setIsSomethingWentWrongPopupOpen(true))
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie({ country: movie.country,
                        director: movie.director,
                        duration: movie.duration,
                        year: movie.year,
                        description: movie.description,
                        image: `https://api.nomoreparties.co${movie.image.url}`,
                        trailerLink: movie.trailerLink,
                        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                        movieId: movie.id,
                        nameEN: movie.nameEN,
                        nameRU: movie.nameRU,
                       })
                       .then((data) => {
                        setSavedCards([data, ...savedCards])})
                      .catch((err) => setIsSomethingWentWrongPopupOpen(true))
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie)
    .then(() => {
      setSavedCards((state) => state.filter((c) => c._id !== movie._id));
    })
    .catch((err) => setIsSomethingWentWrongPopupOpen(true))
  }

  function likeCard(){
    setCardLiked(true)
  }

  function dislikeCard(){
    setCardLiked(false)
  }

  function handleLike(movie) {
    setIsLoading(true);
    mainApi.getSavedMovies()
    .then((movies) => {
      const savedMovie = movies.find( function(film) {return film.nameRU.includes(movie.nameRU)} )
      if(savedMovie){
        handleDeleteMovie(savedMovie);
        likeCard();
        console.log(isCardLiked)
      }
      else {handleSaveMovie(movie);
            dislikeCard();
            console.log(isCardLiked)}
    })
    .catch((err) => {
      console.log(err);
      setIsSomethingWentWrongPopupOpen(true)
    })
    .finally(setIsLoading(false))   
  }



  React.useEffect(() => {
      mainApi.getUserInfoApi()
      .then((res) => { if (res._id) {
          setLoggedIn(true);  
          setCurrentUser(res);}}
    )
    .catch((err) => {
      console.log(err)
    });
    mainApi.getSavedMovies()
    .then((res) => setSavedCards(res))
    .catch((err) => {
      console.log(err)
    });
  }, [loggedIn]);




 
    
  React.useEffect(() =>{
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    console.log(foundMovies)
    setCards(foundMovies.slice(0, 12))
  },
  []);  

    
  function closeAllPopups() {
    setIsNavigationPopupOpen(false)
    setIsNothingFoundPopupOpen(false)
    setIsSomethingWentWrongPopupOpen(false)
    setIsWrongUserInfoPopupOpen(false)
  }

  function openWrongUserInfoPopup(){
    setIsWrongUserInfoPopupOpen(true)
  }

  function openNavigationPopup() {
    setIsNavigationPopupOpen(true)
  }

  function openSomethingWentWrongPopup() {
    setIsSomethingWentWrongPopupOpen(true)
  }



  
  return(
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        
        <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeAllPopups}/>
        <SomethingWentWrongPopup isOpen={isSomethingWentWrongPopupOpen} onClose={closeAllPopups}/>
        <NothingFoundPopup isOpen={isNothingFoundPopupOpen} onClose={closeAllPopups}/>
        <Preloader isOpen={isLoading}/>
        <Switch>
        <Route exact path='/'>
                        <Main
                        onHeaderClick={openNavigationPopup}
                        loggedIn={loggedIn}/>
                        </Route>
        <ProtectedRoute path='/movies'
                        loggedIn={loggedIn}
                        saveCard={handleLike}
                        onHeaderClick={openNavigationPopup}
                        component={Movies} 
                        cards={cards}  
                        onSearchMovies={searchNewFilms}
                        isSelected={isCheckboxSelected}
                        searchShortFilms={searchShortFilms}
                        searchAllFilms={searchAllFilms}
                        isLiked={isCardLiked}
                        />
        <ProtectedRoute path='/saved-movies' 
                        component={SavedMovies} 
                        savedCards={savedCards}
                        deleteCard={handleDeleteMovie}  
                        onHeaderClick={openNavigationPopup}
                        loggedIn={loggedIn}
                        isSelected={isCheckboxSelected}
                        searchShortFilms={searchShortFilms}
                        searchAllFilms={searchAllFilms}/>
        <ProtectedRoute path='/profile' 
                        component={Profile} 
                        onUpdateUser={updateUserInfo}
                        onHeaderClick={openNavigationPopup}
                        loggedIn={loggedIn}/>
        <Route path='/signin'>
            <Login openErrorPopup={openWrongUserInfoPopup} handleLogin={handleLogin}/>
        </Route>
        <Route path='/signup'>   
            <Register openErrorPopup={openWrongUserInfoPopup} handleLogin={handleLogin}/>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
        </Switch>
        
    </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
