import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrPrevious, GrNext } from 'react-icons/gr'
import Images from './images'
import '../../style/carousel.css'

export default function Carousel() {
    const [hoveredId, setHoveredId] = useState(null)

    const handleHover = (id) => {
        setHoveredId(id)
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: false,
        // fade: true,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <GrNext />
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow">
                    <GrPrevious />
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    // dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                },
            },
        ],
    }

    return (
        <>
        <span id='carousel'></span>
            <div className="content">
                <div className="container">
                    <Slider {...settings}>
                        {Images.map((item) => (
                            <div key={item.id} className="img-container">
                                <img
                                    src={
                                        hoveredId === item.id
                                            ? item.hovered
                                            : item.cover
                                    }
                                    alt={item.alt}
                                    className="img"
                                    onMouseEnter={() => handleHover(item.id)}
                                    onMouseLeave={() => handleHover(null)}
                                />
                                <p className="description">{item.title}</p>
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
