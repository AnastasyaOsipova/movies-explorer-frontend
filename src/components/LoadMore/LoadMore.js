import React from 'react';
import DeviderBlock from '../DeviderBlock/DeviderBlock';
import './LoadMore.css';

function LoadMore() {
    return(
        <DeviderBlock>
            <button className='movies__load-more_button'>
                Ещё
            </button>
        </DeviderBlock>
    )
}

export default LoadMore;