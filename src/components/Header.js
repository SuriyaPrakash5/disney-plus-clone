import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>

            {/* left - logo */}
            <div className='header__logo'>
                <img src='/images/logo.svg' alt='' />
            </div>

            {/* centre nav - menu */}
            <div className='header__navMenu'>
                <a>
                    <img src='/images/home-icon.svg' alt='' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' alt='' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' alt='' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' alt='' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' alt='' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' alt='' />
                    <span>SERIES</span>
                </a>
            </div>

            {/* right - profile */}
            <div className='header__userImage'>
                <img src='https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg' alt='' />
            </div>

        </div>
    )
}

export default Header
