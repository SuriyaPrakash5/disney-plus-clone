import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'


function Detail() {

    const { id } = useParams();
    const movies = useSelector(selectMovies)

    return (

        <div className='detail'>
            <div className='detail__background'>
                <img src={movies[(Number(id) - Number(1))].backgroundImg} alt='' />
            </div>
            <div className='detail__imageTitle'>
                <img src={movies[(Number(id) - Number(1))].imgTitle} alt='' />
            </div>
            <div className='detail__controls'>
                <button className='detail__playButton'>
                    <img src='/images/play-icon-black.png' alt='' />
                    <span>PLAY</span>
                </button>
                <button className='detail__trailerButton'>
                    <img src='/images/play-icon-white.png' alt='' />
                    <span>TRAILER</span>
                </button>
                <button className='detail__addButton'>
                    <span>+</span>
                </button>
                <button className='detail__groupWatchButton'>
                    <img src='/images/group-icon.png' alt='' />
                </button>
            </div>
            <div className='detail__subTitle'>
                2018 - 7m - Family, Fantasy, Kids, Horror
            </div>
            <div className='detail__description'>
                Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show was shot in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, and Spain. It premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.
            </div>

        </div>
    )
}

export default Detail
