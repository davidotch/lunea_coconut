import React from 'react'
import transition from '../../transition'
import Social from '../social/social'
import '../../style/home.css'

import Carousel from '../carousel/carousel'

const home = () => {
    return (
        <>
            <section className="section-home">
                <Social />
            </section>
            <Carousel />
            <section className="section-ht">
                <div className="container-ht">
                    <h1>Histoire</h1>
                    <p>
                        Le pastel serait, d'après Léonard de Vinci, une
                        invention française : il serait apparu pour la première
                        fois en 1465, dans une étude que fit Jean Fouquet pour
                        le portrait de Jouvenel des Ursins.
                    </p>
                    <p>
                        A quelques années de là, Léonard rehausse de pastel son
                        portrait d'Isabelle d'Este et l'utilise à nouveau pour
                        les visages des apôtres avant de peindre La Cène. Ses
                        élèves vont l'imiter, mais le nouveau procédé ne
                        dépassera pas le cercle restreint de Milan et Venise.
                    </p>
                    <p>
                        Retour en France, à Versailles, autour de Charles Le
                        Brun, le puissant premier peintre de Louis XIV. Autour
                        du roi, on découvre que le velouté que permet l'usage du
                        pastel rend à la fois la somptuosité des costumes et
                        l'éclat des carnations avec plus de charme que la
                        peinture.
                    </p>
                    <p>
                        Mais la technique nécessite de l'artiste une habileté
                        peu commune pour estomper les traits avec le bout du
                        doigt et mêler ensemble les couleurs pour obtenir des
                        demi-teintes.
                    </p>
                    <p>
                        Mais la technique nécessite de l'artiste une habileté
                        peu commune pour estomper les traits avec le bout du
                        doigt et mêler ensemble les couleurs pour obtenir des
                        demi-teintes.
                    </p>
                </div>
            </section>
        </>
    )
}

export default transition(home)