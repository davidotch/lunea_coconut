import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homePage'
import Gallery from './pages/gallery'
import Footer from './components/footer/footer'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
