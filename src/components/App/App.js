import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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

  const [isCheckboxSelected, setIsCheckboxSelected] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  const [savedCards, setSavedCards] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState();

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const history = useHistory();

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
  else {
    setLoggedIn(false)
  }
}

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
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
      { const foundMovies = movies.filter(function(item) {return item.description.toLowerCase().includes(keyWord.toLowerCase())||item.nameRU.toLowerCase().includes(keyWord.toLowerCase()) });
        return foundMovies}
    else {const foundMovies = movies.filter(function(item) {return item.duration>40 && (item.description.toLowerCase().includes(keyWord.toLowerCase())||item.nameRU.toLowerCase().includes(keyWord.toLowerCase()))}); 
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
    handleTokenCheck();
    moviesApi.getMovies()
    .then((data) => 
    searchFilms(data, keyWord))
    .then((res) => {localStorage.setItem('foundMovies', JSON.stringify(res));
                    localStorage.setItem('keyWord', keyWord);
                    localStorage.setItem('isCheckboxSelected', isCheckboxSelected)
                    })
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
    if ( foundMovies && windowWidth >= 1220 ) {
      setCards(foundMovies.slice(0, cards.length+3));
    }
    else if (foundMovies) {
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
    localStorage.removeItem('isCheckboxSelected');
    setCurrentUser({});
    history.push('/') 
  }

  function updateUserInfo(name, email) {
    handleTokenCheck()
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
                        setSavedCards([data, ...savedCards]);
                      })
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

  function handleSetSavedCards(cards){
    setSavedCards(cards)
  }


  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    
  }, [windowWidth])

  
  React.useEffect(() => {
    mainApi.updateToken();
    mainApi.getUserInfoApi()
     .then((res) => { if (res._id) {
          setLoggedIn(true);  
          setCurrentUser(res);}}
    )
    .catch((err) => {
      console.log(err)
    });
    mainApi.getSavedMovies()
    .then((res) => {setSavedCards(res);
                    localStorage.setItem('savedCards', JSON.stringify(savedCards));
                  })
    .catch((err) => {
      console.log(err)
    });
    moviesApi.getMovies()
    .then((res) => {localStorage.setItem('allMovies', JSON.stringify(res));
    })
.catch((err) => {
console.log(err)
});
    handleTokenCheck()
  }, [loggedIn]);

 
    
  React.useEffect(() =>{
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if(foundMovies !== null)
    {
      handleResize(foundMovies);
    }
  },
  []);  

  React.useEffect(() =>{
    const checkboxStatus = JSON.parse(localStorage.getItem('isCheckboxSelected'));
    if (checkboxStatus) {
      setIsCheckboxSelected(checkboxStatus)
    }
    else {
      setIsCheckboxSelected(false)
    }},
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
                        handleSetSavedCards={handleSetSavedCards}
                        setIsCheckboxSelected={setIsCheckboxSelected}
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
                        searchAllFilms={searchAllFilms}
                        handleSetSavedCards={handleSetSavedCards}
                        setIsCheckboxSelected={setIsCheckboxSelected}
                        />
        <ProtectedRoute path='/profile' 
                        component={Profile} 
                        onUpdateUser={updateUserInfo}
                        onHeaderClick={openNavigationPopup}
                        loggedIn={loggedIn}
                        handleLogout={handleLogout}/>
        <Route path='/signin'>
          {() =>
                loggedIn === undefined ? (
                  <Preloader isOpen={true} />
                ) : !loggedIn ? (
                  <Login openErrorPopup={openWrongUserInfoPopup} handleLogin={handleLogin}/>
                ) : (
                  <Redirect to="/movies" />
                )
              }
        </Route>
        <Route path='/signup'>   
          {() =>
                  loggedIn === undefined ? (
                    <Preloader isOpen={true} />
                  ) : !loggedIn ? (
                    <Register openErrorPopup={openWrongUserInfoPopup} handleLogin={handleLogin}/>
                  ) : (
                    <Redirect to="/movies" />
                  )
                }    
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
