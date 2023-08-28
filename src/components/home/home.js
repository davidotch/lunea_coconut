import React from 'react'
import { SocialList } from '../home/social'
import '../../style/home.css'

export default function home() {
    return (
        <main className="home">
            <div className="social">
                <ul>
                    {SocialList.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <a
                                    href={item.path}
                                    target="_blank"
                                    rel="noreferrer">
                                    <span>{item.title}</span>
                                    {item.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
