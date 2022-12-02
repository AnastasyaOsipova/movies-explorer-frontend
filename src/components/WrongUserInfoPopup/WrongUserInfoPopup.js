import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function WrongUserInfoPopup(props){
    return(
        <ErrorPopup text={`Неверный email или пароль`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default WrongUserInfoPopup;