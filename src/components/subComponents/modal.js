// Modal.js
import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImage, onClose }) => {
    return (
        <motion.div className="modal" onClick={onClose}>
            <motion.img
                src={selectedImage.hovered}
                alt={selectedImage.alt}
                className="modal-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
        </motion.div>
    )
}

export default Modal
