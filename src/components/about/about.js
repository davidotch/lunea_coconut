import React from 'react'
import '../../style/about.css'
import Transition from '../../transition'

const about = () => {
    return (
        <>
            <section className="about"></section>
            <section className="aboutText">
                <div className='aboutDescription'>
                    <h1>A propos de moi</h1>
                    <p>
                        Passionnée de dessins depuis toujours, très émotionnelle
                        également, c'est suite à un évènement difficile dans ma
                        vie que j'ai "reconnecté" à ma petite fille intérieure.
                        <br /> Le dessin est donc réapparu dans ma vie d'adulte
                        à ce moment-là. <br />De fil en aiguille, j'ai découvert le
                        pastel gras et c'est devenu une véritable passion.{' '}
                        <br />
                        Depuis, on ne m'arrête plus! A travers mes tableaux, mon
                        but est d'illuminer vos journées et vos intérieurs pour
                        mon plus grand bonheur.
                    </p>
                    <hr />
                    <p>
                        Maman d'une grande fille et de jumeaux(garçon et fille),
                        l'idée de Lunéa et Coconut a germé dans mon esprit peu
                        de temps après la naissance de ces derniers. <br />
                        Depuis, la petite graine a poussé et est devenue réalité
                        pour ma plus grande fierté!{' '}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Transition(about)
