import React from 'react';
import './DeviderBlock.css'

function DeviderBlock(props) {
    return(
        <div className='devider-block'>
            {props.children}            
        </div>
    )
}

export default DeviderBlock;