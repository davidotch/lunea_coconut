import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './subComponents/modal'
import Images from './datas/images'
import '../style/carousel.css'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [seletedImage, setSelectedImage] = useState(null)

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

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    }

    return (
        <div className="content">
            <div className="container" id="carousel">
                <h1>Mes Créations</h1>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    transition={{ duration: 0.5 }}>
                    <div className="carousel-container">
                        {Images.slice(currentIndex, currentIndex + 3).map(
                            (item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="img-container"
                                    onClick={() => handleOpenModal(index)}>
                                    <motion.img
                                        src={item.cover}
                                        alt={item.alt}
                                        className="img"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.p
                                        className="description"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}>
                                        {item.title}
                                    </motion.p>
                                    <motion.p
                                        className="description"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}>
                                        {item.description}
                                    </motion.p>
                                </motion.div>
                            )
                        )}
                    </div>
                    <button
                        className="carousel-button prev-button"
                        onClick={handlePrev}>
                        <FaArrowLeft />
                    </button>
                    <button
                        className="carousel-button next-button"
                        onClick={handleNext}>
                        <FaArrowRight />
                    </button>
                </motion.div>
            </div>
            {seletedImage && (
                <Modal
                    selectedImage={seletedImage}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    )
}

export default Carousel
