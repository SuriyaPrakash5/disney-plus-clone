import React from 'react'
import './Viewers.css'

function Viewers() {
    return (
        <div className='viewers'>
            <div className='viewers__wrap'>
                <img src='images/viewers-disney.png' alt='' />
                <video autoplay="" loop muted>
                    <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-pixar.png' alt='' />
                <video autoplay="" loop muted>
                    <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-marvel.png' alt='' />
                <video autoplay="" loop muted>
                    <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-starwars.png' alt='' />
                <video autoplay="" loop muted>
                    <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-national.png' alt='' />
                <video autoplay="" loop muted>
                    <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Viewers
