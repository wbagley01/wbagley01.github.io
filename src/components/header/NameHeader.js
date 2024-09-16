import React from 'react';
import App from '../../App'
import './NameHeader.css'

function NameHeader() {
    return(
        <div className='NameHeader'>
            <div className='Name'>William Bagley</div>
            <div className='Container'>
                <div className='Description'>Description</div>
                <img src= '/images/william.png' className='RealImage' alt=''/>
            </div>
            <div className='Container'>
                
            </div>
        </div>
    )
}

export default NameHeader;