import React from 'react';
import App from '../../App'
import './ProjectCard.css'

function ProjectSlot({title, description, image, techStack}) {
    return(
        <div className='ProjectSlot'>
            <div className='Container'>
                <header> {title}</header>
                <img src={image} className='Image'/>
            </div>
            <p> {description} </p>
            <p> {techStack} </p>
        </div>
    )
}

function ProjectCard() {
    return(
        <div className='Grid'>
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
            <ProjectSlot title={projects[0].title} description={projects[0].description} image={projects[0].image} techStack={projects[0].techStack} />
        </div>

    )
}

const projects = [
    {
        title: "Portfolio",
        description: "Deploying a React app on Github Pages",
        image: "/images/linkedin.png",
        techStack: ["React ", "HTML ", "CSS ", "Github Pages"]
    },
]

export default ProjectCard;