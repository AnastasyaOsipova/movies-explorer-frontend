import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function SomethingWentWrongPopup(props){
    return(
        <ErrorPopup text={`Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default SomethingWentWrongPopup;