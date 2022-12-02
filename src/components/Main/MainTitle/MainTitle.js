import React from 'react';
import './MainTitle.css';

function MainTitle(props) {
    return(
        <h2 className='main__title'>
                {props.children}
        </h2>
    )
}

export default MainTitle;