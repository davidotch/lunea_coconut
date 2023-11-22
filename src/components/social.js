import React from 'react'
import { SocialList } from './datas/socialList'
import '../style/social.css'

const social = () => {
    return (
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
    )
}

export default social
