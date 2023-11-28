import React from 'react'
import '../../style/card.css'

const Card = ({ cover, title, description, onClick }) => {
  return (
    <div className="card-content" onClick={onClick}>
      <img src={cover} alt={title} />
      <div className="card-hover">
        <p>Aperçu</p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
