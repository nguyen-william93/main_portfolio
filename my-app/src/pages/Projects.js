import React from 'react'
import Card from '../components/Card'
import {projects} from '../constant/constants'

const Projects = () => {
    // console.log(projects)
    return (
        <div className='container-fluid'>
            <div className='row'>
                {projects.map((project) => {
                    return (
                        <Card
                        cardTitle={project.title}
                        cardSubtitle={project.subtitle}
                        cardLink={project.link}
                        cardStack={project.stack}
                        cardImage={project.image}
                        key={project.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects