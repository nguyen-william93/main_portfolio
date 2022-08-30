import React, {useState} from 'react'
import Card from '../components/Card'

const Projects = () => {
    const projects = [
    {title: "Orignal Portfolio",
    subtitle: "My orginal portfolio using Javascript",
    link: "https://phitran.info/",
    id: '0'
    },
    
    {title: "Covid-19 Tracker",
    subtitle: "Covid-19 tracker using React",
    link: "https://nifty-ramanujan-405dcd.netlify.app/",
    id: "1"
    }]

    return (
        <div className='container-fluid'>
            <div className='row'>
                {projects.map((project) => {
                    return (
                        <Card
                        cardTitle={project.title}
                        cardSubtitle={project.subtitle}
                        cardLink={project.link}
                        key={project.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects