import React from 'react'
import '../../style/card.css'

const Card = ({ cover, title, description }) => {
    return (
        <div className="card-content">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card
