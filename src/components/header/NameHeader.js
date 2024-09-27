import React from 'react';
import App from '../../App'
import './NameHeader.css'

function NameHeader() {
    const email = "wbagley01@gmail.com";
    const descriptionText = "Here's a story all about how my life got"

    const handleImageClick = () => {
        navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copied to clipboard");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return(
        <div className='NameHeader'>
            <div className='Name'>William Bagley</div>
            <div className='Container'>
                <div className='Description'>{descriptionText}</div>
                <img src= '/images/william.png' className='RealImage' alt=''/>
            </div>
            <div className='ImageIcons'>
                <a href='https://www.linkedin.com/in/william-bagley-179326230/'>
                    <img src= '/images/linkedin.png'/>
                </a>
                <a href='https://github.com/wbagley01'>
                    <img src= '/images/github.png'/>
                </a>
                <img src= '/images/gmail.png' onClick={handleImageClick}></img>
            </div>
        </div>
    )
}

export default NameHeader;