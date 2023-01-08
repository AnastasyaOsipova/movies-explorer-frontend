import React from 'react';
import './ErrorPopup.css';

function ErrorPopup(props){
    return(
        <section className={`error-popup  ${
            props.isOpen ? "error-popup_opened" : ""
          }`}>
            <div className='error-popup__container'>
            <button
                onClick={props.onClose}
                type="button"
                className="error-popup__close-button">
            </button>
            <h2 className='error-popup__text'>{props.text}</h2>
            </div>
            </section>
    )
}

export default ErrorPopup;