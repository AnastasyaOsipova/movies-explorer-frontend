import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function UserInfoChangedPopup(props){
    return(
        <ErrorPopup text={`Данные пользователя изменены`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default UserInfoChangedPopup;