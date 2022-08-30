import React from 'react'

const Card = (props) => {
    const {cardTitle, cardSubtitle, cardLink, cardStack, cardImage} = props
    console.log(cardLink)
    
    return (
        <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card mx-3 my-3">
            <img class="card-img-top" src={cardImage} alt="Card image cap"/>
                <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p className="card-text">{cardSubtitle}</p>
                <p className="card-text">Technology use: {cardStack}</p>
            </div>
            <ul className='d-flex justify-content-around px-0'>
                <a href={cardLink} className="card-link" target="_blank">
                View Demo
                </a>
                <a href={cardLink} className="card-link" target="_blank">
                View Source Code
                </a>
            </ul>
        </div>
      </div>
    )
}

export default Card