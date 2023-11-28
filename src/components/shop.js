import React, { useState } from 'react'
import Card from './subComponents/card'
import '../style/shop.css'
import Transition from '../transition'
import Modal from '../components/subComponents/modal'

import Images from './datas/imagesShop'

const Shop = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpenModal = (index) => {
    setSelectedImage(Images[index])
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="shop-content">
      <h1>Nostalgie d'été</h1>
      <div className="shop-card">
        {Images &&
          Images.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleOpenModal(index)}
              cover={item.cover}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Transition(Shop)
