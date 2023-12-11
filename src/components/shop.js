import React, { useState } from 'react'
import Card from './subComponents/card'
import '../style/shop.css'
import Transition from '../transition'
import Modal from '../components/subComponents/modal'

import Collections from './datas/imagesShop' // Importez Collections
import { Link } from 'react-router-dom'

const Shop = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpenModal = (collectionIndex, imageIndex) => {
    setSelectedImage(Collections[collectionIndex].images[imageIndex]) // Utilisez Collections
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="shop-content">
      {Collections.map((collection, collectionIndex) => (
        <div key={collectionIndex}>
          <h1>{collection.title}</h1> {/* Affichez le titre de la collection */}
          <div className="shop-card">
            {collection.images &&
              collection.images.map((item, imageIndex) => (
                <Card
                  key={imageIndex}
                  onClick={() => handleOpenModal(collectionIndex, imageIndex)}
                  cover={item.cover}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Transition(Shop)
