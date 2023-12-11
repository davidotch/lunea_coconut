import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import Modal from './subComponents/modal'
import Images from './datas/imagesCarousel'
import '../style/carousel.css'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagesToShow, setImagesToShow] = useState(3)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const updateImagesToShow = () => {
      if (window.innerWidth < 768) {
        setImagesToShow(1)
      } else if (window.innerWidth < 940) {
        setImagesToShow(2)
      } else {
        setImagesToShow(3)
      }
    }

    window.addEventListener('resize', updateImagesToShow)
    updateImagesToShow()

    return () => window.removeEventListener('resize', updateImagesToShow)
  }, [])

  const handleOpenModal = (index) => {
    setSelectedImage(Images[currentIndex + index])
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesToShow) % Images.length)
    setActiveDot((activeDot + 1) % Images.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - imagesToShow + Images.length) % Images.length
    )
    setActiveDot((activeDot - 1 + Images.length) % Images.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const Dots = ({ activeIndex, imgCount }) => {
    return (
      <div className="carousel-dots">
        {Array.from({ length: imgCount }).map((_, idx) => (
          <div
            key={idx}
            className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="carousel-content">
      <div className="container" id="carousel">
        <h1>Mes Créations</h1>
        <div>
          <div {...handlers} className="carousel-container">
            {Images.slice(currentIndex, currentIndex + imagesToShow).map(
              (item, index) => (
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
              )
            )}
          </div>
          <button className="carousel-button prev-button" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="carousel-button next-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
        <Dots activeIndex={activeDot} imgCount={Images.length} />
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Carousel
