import React from 'react';
import App from '../../App'
import './EducationCard.css'

function EducationCard() {
    const university = "Arizona State University";
    const school = "Ira A. Fulton Schools of Engineering";
    const degree = "Computer Science";
    const degreetype = "Bachelor of Science";
    const gpa = "GPA: 3.67";
    const eyears = "2020 - 2024";
    const location = "Tempe, Arizona";

    const certificate = "Computer Gaming";
    const cyears = "2022 -2024";
    return(
        <div className='EducationCard'>
            <div className='Container'>
                {university}
                <a href='https://www.asu.edu/'>
                    <img src= '/images/asu.png' style={{maxWidth: '100px', maxHeight: '100px'}}/>
                </a>
            </div>
            <div> {degreetype} {degree} </div>
            <div> {school} </div>
            <div> {location} </div>
            <div> {gpa} </div>
            <div> {eyears} </div>
            <div> {certificate} </div>
            <div> {cyears} </div>
        </div>
    )
}

export default EducationCard;