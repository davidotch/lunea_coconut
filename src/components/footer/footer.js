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
                        <FaFacebookSquare
                            size={35}
                            color="#3b5998"
                            className="iconHover"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/luneaetcoconut/"
                        target="_blank"
                        rel="noreferrer">
                        <FaInstagramSquare
                            size={35}
                            color="#fd1d1d"
                            className="iconHover"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:luneaetcoconut@hotmail.com">
                        <FaEnvelopeSquare
                            size={35}
                            color="#6fc2b0"
                            className="iconHover"
                        />
                    </a>
                </li>
            </ul>
            <p>&copy; Copyright 2023 - Lunéa et Coconut - Tous droits réservés.</p>
        </div>
    )
}
