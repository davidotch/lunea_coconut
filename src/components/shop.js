import React from 'react'
import Card from './subComponents/card'
import '../style/shop.css'
import Transition from '../transition'

import Images from './datas/imageShop'

const shop = () => {
    return (
        <div className="shop-content">
            <h1>Nostalgie d'été</h1>
            <div className="shop-card">
                {Images &&
                    Images.map((item) => (
                        <Card
                            key={item.id}
                            cover={item.cover}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Transition(shop)
