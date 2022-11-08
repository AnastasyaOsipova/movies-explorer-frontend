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

function App() {

  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);

  function closeNavigationPopup() {
    setIsNavigationPopupOpen(false)
  }

  function openNavigationPopup() {
    setIsNavigationPopupOpen(true)
  }

  return(
    <div className="page">
        <Switch>
        <Route exact path='/'>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
          <Header isLogged={false} onClick={openNavigationPopup}/>
          <Main/>
          <Footer/>
        </Route>
        <Route path='/movies'>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
          <Header isLogged={true} onClick={openNavigationPopup}/>
          <Movies/>
        </Route>
        <Route path='/saved-movies'>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
          <Header isLogged={true} onClick={openNavigationPopup}/>
          <SavedMovies/>
        </Route>
        <Route path='/profile'>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closeNavigationPopup}/>
          <Header isLogged={true} onClick={openNavigationPopup}/>
          <Profile name={`Виталий`} email={`pochta@yandex.ru`}/>
        </Route>
        <Route path='/signin'>
            <Login/>
        </Route>
        <Route path='/signup'>
            <Register/>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
        </Switch>
    </div>
  );
}


export default App;
