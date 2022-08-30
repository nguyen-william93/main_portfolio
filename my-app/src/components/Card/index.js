import React from 'react'

const Card = (props) => {
    const {cardTitle, cardSubtitle, cardLink} = props
    console.log(cardLink)
    
    return (
        <div className="col-lg-4">
        <div className="card mx-3 my-5">
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p className="card-text">{cardSubtitle}</p>
            <a href={cardLink} className="card-link">
              View Demo
            </a>
          </div>
        </div>
      </div>
    )
}

export default Card