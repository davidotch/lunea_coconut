import React, { useState } from 'react'
import Card from './subComponents/card'
import '../style/shop.css'
import Transition from '../transition'
import Modal from '../components/subComponents/modal'

import Collections from './datas/imagesShop' // Import Collections

const Shop = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpenModal = (collectionIndex, imageIndex) => {
    setSelectedImage(Collections[collectionIndex].images[imageIndex]) // Utilise Collections
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="shop-content">
      {Collections.map((collection, collectionIndex) => (
        <div key={collectionIndex}>
          <h1>{collection.title}</h1> {/* Affiche le titre de la collection */}
          <div className="shop-card">
            {collection.images &&
              collection.images.map((item, imageIndex) => (
                <Card
                  key={imageIndex}
                  onClick={() => handleOpenModal(collectionIndex, imageIndex)}
                  cover={item.cover}
                  title={item.title}
                  description={item.description}
                  prix={item.prix}
                />
              ))}
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
      <h4>Pour toutes commandes me contacter</h4>
    </div>
  )
}

export default Transition(Shop)
