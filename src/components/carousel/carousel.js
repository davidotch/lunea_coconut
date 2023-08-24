import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrPrevious, GrNext } from 'react-icons/gr'
import Images from './images'
import '../../style/carousel.css'

export default function Carousel() {
    const settings = {
        centerMode: true,
        centerPadding: "60px",
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"><GrNext /></div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"><GrPrevious /></div>
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
                    dots: true,
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
                },
            },
        ],
    }

    return (
        <>
            <div className="content">
                <div className="container">
                    <Slider {...settings}>
                        {Images.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.cover}
                                    alt={item.alt}
                                    className="img"
                                />
                                <h2 className="title">{item.title}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
