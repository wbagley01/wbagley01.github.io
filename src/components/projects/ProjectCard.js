import React from 'react';
import App from '../../App'
import './ProjectCard.css'

function ProjectSlot({title, description, image, techStack}) {
    return(
        <div className='ProjectCard'>
            <div className='Container'>
                <header> {title} </header>
                <img src={image}></img>
            </div>
            <p> {description} </p>
            <p> {techStack} </p>
        </div>
    )
}

function ProjectCard() {
    return(
        <ProjectSlot title="Test" description="Test2" image="/images/linkedin.png" techStack="test" />
    )
}

export default ProjectCard;