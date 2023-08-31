import React from 'react'
import '../../style/contactForm.css'

function contact() {
    return (
        <div className="contact" id="contact">
            <div className="contactText">
                <h1>Contact</h1>
                <p>
                    Vous êtes intéressé ? Vous avez une question, une suggestion
                    ?
                </p>
                <p>Contactez-moi pour en savoir plus.</p>
                <p>luneaetcoconut@hotmail.com</p>
            </div>
            <form
                name="contact"
                method="POST"
                className="contactForm"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" required />
                <input type="text" name="name" placeholder="Nom" required />
                <input type="email" name="email" placeholder="E-mail" />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default contact
