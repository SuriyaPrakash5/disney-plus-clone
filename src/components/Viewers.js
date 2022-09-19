import React from 'react'
import './Viewers.css'

function Viewers() {
    return (
        <div className='viewers'>
            <div className='viewers__wrap'>
                <img src='images/viewers-disney.png' alt='' />
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-pixar.png' alt='' />
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-marvel.png' alt='' />
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-starwars.png' alt='' />
            </div>
            <div className='viewers__wrap'>
                <img src='images/viewers-national.png' alt='' />
            </div>
        </div>
    )
}

export default Viewers
