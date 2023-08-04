import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SectionOne from './pages/home'
import Gallery from './pages/gallery'
import Contact from './pages/contact'
import Footer from './components/footer/footer'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<SectionOne />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
