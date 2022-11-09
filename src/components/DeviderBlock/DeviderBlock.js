import React from 'react';
import './DeviderBlock.css'

function DeviderBlock(props) {
    return(
        <section className='devider-block'>
            {props.children}            
        </section>
    )
}

export default DeviderBlock;