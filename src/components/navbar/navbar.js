import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HeaderData } from '../navbar/headerData'
import '../../style/navbar.css'

const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="header header-color">
            <nav className="navbar">
                <Link
                    className="logo"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
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
                                    spy={true}
                                    smooth={true}
                                    offset={10}
                                    duration={500}
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
