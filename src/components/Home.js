import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'

function Home() {
    return (
        <div className='home'>
            <ImageSlider />
            <Viewers />
        </div>
    )
}

export default Home
