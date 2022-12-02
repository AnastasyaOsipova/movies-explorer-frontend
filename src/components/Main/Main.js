import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



function Main(props) {
    return(
        <div className='main'>
        <Header loggedIn={props.loggedIn} onHeaderClick={props.onHeaderClick}/>
        <main className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
        <Footer/>
        </div>
    )
}

export default Main;