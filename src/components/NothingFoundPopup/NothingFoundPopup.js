import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function NothingFoundPopup(props){
    return(
        <ErrorPopup text={`Ничего не найдено`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default NothingFoundPopup;