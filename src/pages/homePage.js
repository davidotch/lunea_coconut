import React from 'react'
import Home from '../components/home/home'
import Carousel from '../components/carousel/carousel'
import ContactForm from '../components/contactForm/contactForm'
import '../style/home.css'

export default function homePage() {
    return (
        <>
            <Home />
            <Carousel />
            <ContactForm />
        </>
    )
}
