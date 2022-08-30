import React, {useState} from 'react'
import Card from '../components/Card'

const Projects = () => {
    const projects = [
    {title: "Google Book Search",
    subtitle: "A react full stack app that allowed you to search for a book and its detail. User can create an account, save and delete their list.",
    link: "https://hidden-sierra-28467.herokuapp.com/",
    stack: "Mongo, React, Javascript, Express, Node",
    image: "/images/google-book.png",
    id: '0'
    },
    
    {title: "Tic-Tac-Toe",
    subtitle: "A beautiful version of Tic-Tac-Toe",
    link: "https://nguyen-william93.github.io/Tic-Tac-Toe/",
    stack: "HTML, Javascript, CSS",
    image: "/images/tictactoe.png",
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