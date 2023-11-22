import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import About from './components/about'
import Contact from './components/contactForm'
import Footer from './components/footer'

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
