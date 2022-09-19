import React from 'react'
import './ImageSlider.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Slider {...settings} className='imageSlider'>
            <div className='imageSlider__wrap'>
                <img src='/images/slider-badging.jpg' alt='' />
            </div>
            <div className='imageSlider__wrap'>
                <img src='/images/slider-badag.jpg' alt='' />
            </div>
            <div className='imageSlider__wrap'>
                <img src='/images/slider-badging.jpg' alt='' />
            </div>
            <div className='imageSlider__wrap'>
                <img src='/images/slider-badag.jpg' alt='' />
            </div>
        </Slider>
    )
}

export default ImageSlider
