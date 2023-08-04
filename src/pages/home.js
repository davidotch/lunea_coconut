import React from 'react'
import background from '../assets/background.jpg'
import bird from '../assets/images/oiseau.jpg'
import sea from '../assets/images/mer.jpg'
import nihghtAndDay from '../assets/images/arbre_jour_nuit.jpg'
import '../style/home.css'

export default function sectionOne() {
    return (
        <main className="home" id="home">
            <div className="container">
                <img className="background" src={background} alt="fond" />
                <div className="description">
                    <h1>A Propos</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className="timeline">
                    <article>
                        <img className="board" src={bird} alt='un oiseau' />
                    </article>
                    <article>
                        <img className="board" src={sea} alt='paysage marin' />
                    </article>
                    <article>
                        <img className="board" src={nihghtAndDay} alt='nuit et jour' />
                    </article>
                </div>
            </div>
        </main>
    )
}
