import React from 'react'
import './Movies.css'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {

    const movies = useSelector(selectMovies)

    return (
        <div className='movies'>
            <h4>Recommended for You</h4>
            <div className='movies__content'>
                {movies && movies.map((movie) => (
                    <div key={movie.id} className='movies__contentWrap'>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt='' />
                        </Link>

                    </div>

                ))
                }
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>
                <div className='movies__contentWrap'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085' alt='' />
                </div>

            </div>
        </div>
    )
}

export default Movies
