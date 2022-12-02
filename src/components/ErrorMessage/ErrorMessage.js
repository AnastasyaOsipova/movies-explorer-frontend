import React from 'react';
import './ErrorMessage.css';

function ErrorMessage(props) {
    return(
        <div className={`error-message  ${
            props.isActive ? 'error-message_active' : ''
          }`}>
            <p className='error-message__text'>Что-то пошло не так...</p>
        </div>
    )
}

export default ErrorMessage;