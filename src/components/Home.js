import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {
    return (
        <div className='home'>
            <ImageSlider />
            <Viewers />
            <Movies />
        </div>
    )
}

export default Home
