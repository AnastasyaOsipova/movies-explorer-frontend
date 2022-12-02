import React from 'react';
import './ErrorMessage.css';

function ErrorMessage(props) {
    return(
        <div className={`error-message  ${
            props.isActive ? 'error-message_active' : ''
          }`}>
            <p className='error-message__text'>{props.message}</p>
        </div>
    )
}

export default ErrorMessage;