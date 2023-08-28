import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { GrPrevious, GrNext } from 'react-icons/gr'
import Images from './images'
import '../../style/carousel.css'

export default function Carousel() {
    const [hoveredId, setHoveredId] = useState(null)

    const handleHover = (id) => {
        setHoveredId(id)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <>
            <div className="content">
                <div className="container" id="carousel">
                    <h1>Mes Créations</h1>
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
