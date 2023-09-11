import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HeaderData } from '../navbar/headerData'
import '../../style/navbar.css'

const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="header">
            <nav className="navbar">
                <Link
                    className="logo"
                    to="/">
                    Lunéa et Coconut
                </Link>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: '#333' }} />
                    ) : (
                        <FaBars size={30} style={{ color: '#333' }} />
                    )}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {HeaderData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link
                                    to={item.path}
                                    onClick={closeMenu}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Header
