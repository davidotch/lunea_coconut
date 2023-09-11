import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Shop from './components/shop/shop'
import About from './components/about/about'
import Contact from './components/contactForm/contactForm'
import Footer from './components/footer/footer'

function App() {
    const location = useLocation()

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default App
