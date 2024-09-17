import React from 'react';
import App from '../../App'
import './NameHeader.css'

function NameHeader() {
    return(
        <div className='NameHeader'>
            <div className='Name'>William Bagley</div>
            <div className='Container'>
                <div className='Description'>Competitive Alpha Geek</div>
                <img src= '/images/william.png' className='RealImage' alt=''/>
            </div>
            <div className='ImageIcons'>
                <a href='https://www.linkedin.com/in/william-bagley-179326230/'>
                    <img src= '/images/linkedin.png'/>
                </a>
                <a href='https://github.com/wbagley01'>
                    <img src= '/images/github.png'/>
                </a>
            </div>
        </div>
    )
}

export default NameHeader;