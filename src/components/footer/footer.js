import React from 'react'
import '../../style/footer.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaEnvelopeSquare,
} from 'react-icons/fa'

export default function footer() {
    return (
        <div className="footer">
            <p>2023 | Lunéa et Coconut | All rights reserved </p>
            <ul>
                <li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer">
                        <FaFacebookSquare size={35} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer">
                        <FaInstagramSquare size={35} />
                    </a>
                </li>
                <li>
                    <a href="mailto:luneaetcoconut@hotmail.com">
                        <FaEnvelopeSquare size={35} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
