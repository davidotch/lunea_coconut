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
            <ul>
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100093448566259"
                        target="_blank"
                        rel="noreferrer">
                        <FaFacebookSquare size={35} color="#3b5998" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/luneaetcoconut/"
                        target="_blank"
                        rel="noreferrer">
                        <FaInstagramSquare size={35} color="#c13584" />
                    </a>
                </li>
                <li>
                    <a href="mailto:luneaetcoconut@hotmail.com">
                        <FaEnvelopeSquare size={35} color="#6fc2b0" />
                    </a>
                </li>
            </ul>
            <p>2023 | Lunéa et Coconut | All rights reserved </p>
        </div>
    )
}
