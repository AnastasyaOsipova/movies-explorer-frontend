import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
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

  const [loggedIn, setLoggedIn] = React.useState(handleTokenCheck());

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function handleTokenCheck() {
    if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
        else{
          handleLogout()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth)
  }

  function handleResize(foundMovies) {
    if ( windowWidth >= 1220 ) {
      setCards(foundMovies.slice(0, 12))
    }
    if ( windowWidth >= 800 && windowWidth < 1220 ) {
        setCards(foundMovies.slice(0, 8))
    }
    if ( windowWidth <= 500) {
      setCards(foundMovies.slice(0, 5))
    }
  }

      
  function searchFilms(movies, keyWord) {
    if (isCheckboxSelected === true)
      { const foundMovies = movies.filter(function(item) {return item.description.includes(keyWord)||item.nameRU.includes(keyWord) });
        return foundMovies}
    else{const foundMovies = movies.filter(function(item) {return item.duration>40 && (item.description.includes(keyWord)||item.nameRU.includes(keyWord))}); 
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
    .then((res) => {localStorage.setItem('foundMovies', JSON.stringify(res));
                    localStorage.setItem('keyWord', keyWord);
                    localStorage.setItem('isCheckboxSelected', isCheckboxSelected)})
    .then(() => {const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
            if(foundMovies.length === 0){
              setIsNothingFoundPopupOpen(true)
            }
            else{
              handleResize(foundMovies);
            };
     })
    .catch((err) => openSomethingWentWrongPopup())
    .finally(() => setIsLoading(false))
  }

  function searchSavedFilms(keyWord) {
    const movies = searchFilms(savedCards, keyWord);
    if (movies.length === 0) {
      setIsNothingFoundPopupOpen(true)
    }
    else{
      setSavedCards(movies)
    } 
  }

  function loadMoreMovies(){
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if ( windowWidth >= 1220 ) {
      setCards(foundMovies.slice(0, cards.length+3));
    }
    else{
        setCards(foundMovies.slice(0, cards.length+2));
    }  
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('token');
    localStorage.removeItem('keyWord');
    localStorage.removeItem('isCheckboxSelected')
  }

  function updateUserInfo(name, email) {
    console.log(name, email);
    mainApi.updateUserInfo(name, email)
    .then((data) => setCurrentUser(data))
    .catch(() => openSomethingWentWrongPopup())
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
                      .catch((err) => openSomethingWentWrongPopup())
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie)
    .then(() => {
      setSavedCards((state) => state.filter((c) => c._id !== movie._id));
    })
    .catch((err) => setIsSomethingWentWrongPopupOpen(true))
  }

  function isLiked(card) {
    return savedCards.some((item) => item.nameRU === card.nameRU)
  }

  function handleLike(movie) {
    setIsLoading(true);
    mainApi.getSavedMovies()
    .then((movies) => {
      const savedMovie = movies.find( function(film) {return film.nameRU.includes(movie.nameRU)} )
      if(savedMovie){
        handleDeleteMovie(savedMovie);
      }
      else {handleSaveMovie(movie);}
    })
    .catch((err) => {
      openSomethingWentWrongPopup()
    })
    .finally(setIsLoading(false))   
  }



  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    handleResize(JSON.parse(localStorage.getItem('foundMovies')));
  }, [windowWidth])

  
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
    if(foundMovies)
    {
      handleResize(foundMovies);
      setIsCheckboxSelected(JSON.parse(localStorage.getItem('isCheckboxSelected')));
    }
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
        <WrongUserInfoPopup isOpen={isWrongUserInfoPopupOpen} onClose={closeAllPopups}/>
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
                        isLiked={isLiked}
                        handleLoadMore={loadMoreMovies}
                        />
        <ProtectedRoute path='/saved-movies' 
                        component={SavedMovies} 
                        savedCards={savedCards}
                        deleteCard={handleDeleteMovie}  
                        onHeaderClick={openNavigationPopup}
                        onSearchMovies={searchSavedFilms}
                        loggedIn={loggedIn}
                        isSelected={isCheckboxSelected}
                        searchShortFilms={searchShortFilms}
                        searchAllFilms={searchAllFilms}/>
        <ProtectedRoute path='/profile' 
                        component={Profile} 
                        onUpdateUser={updateUserInfo}
                        onHeaderClick={openNavigationPopup}
                        loggedIn={loggedIn}
                        handleLogout={handleLogout}/>
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
