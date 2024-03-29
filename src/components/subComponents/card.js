import React from 'react'
import { FiSearch } from 'react-icons/fi'
import '../../style/card.css'

const Card = ({ cover, title, description, prix, onClick }) => {
  return (
    <div className="card-content" onClick={onClick}>
      <img src={cover} alt={title} />
      <FiSearch className="search-icon" />
      <div className="card-hover">
        <p>Aperçu</p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className='price'>{prix}</p>
    </div>
  )
}

export default Card
