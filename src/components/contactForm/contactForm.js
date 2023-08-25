import React from 'react'
import '../../style/contactForm.css'

function contact() {
    return (
        <div className="contact">
            <div className="contactText">
                <h1>contact</h1>
                <p>
                    Vous êtes intéressé ? Vous avez une question, une suggestion
                    ?
                </p>
            </div>
            <form
                name="contact"
                method="POST"
                className="contactForm"
                data-netlify="true"
                onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />
                <label for="name">Votre nom:</label>
                <input type="text" name="name" />

                <label for="name">Votre prénom:</label>
                <input type="text" name="name" />

                <label for="email">Email: </label>
                <input type="email" name="email" />

                <label for="message">Message:</label>
                <textarea name="message"></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default contact
