import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './subComponents/modal'
import Images from './datas/images'
import '../style/carousel.css'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpenModal = (index) => {
    setSelectedImage(Images[currentIndex + index])
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % Images.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + Images.length) % Images.length
    )
  }

  return (
    <div className="carousel-content">
      <div className="container" id="carousel">
        <h1>Mes Créations</h1>
        <div>
          <div className="carousel-container">
            {Images.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <motion.div
                key={item.id}
                className="img-container"
                onClick={() => handleOpenModal(index)}>
                <motion.img
                  src={item.cover}
                  alt={item.alt}
                  className="img"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="carousel-hover">
                  <p>Aperçu</p>
                </div>
                <p className="description">{item.title}</p>
                <p className="description">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <button className="carousel-button prev-button" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="carousel-button next-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Carousel
