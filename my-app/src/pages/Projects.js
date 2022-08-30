import React, {useState} from 'react'
import Card from '../components/Card'

const Projects = () => {
    const projects = [
    {title: "Orignal Portfolio",
    subtitle: "My orginal portfolio using Javascript",
    link: "https://phitran.info/"},

    {title: "Covid-19 Tracker",
    subtitle: "Covid-19 tracker using React",
    link: "https://nifty-ramanujan-405dcd.netlify.app/"
    }]
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                {projects.map(({project}) => {
                    return (
                        <Card
                        cardTitle = {project.title}
                        cardSubtitle = {project.subtitle}
                        cardLink = {project.link}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects