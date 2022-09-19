import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice'
import './Header.css'

// Hello I'm Suriya Prakash

function Header() {

    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signIn = () => {
        dispatch(setUserLogin({
            name: "Suriya Prakash",
            email: "suriya@gmail.com",
            photo: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
        }))
        navigate('/')
    }

    const signOut = () => {
        dispatch(setSignOut())
        navigate('/login')
    }

    return (
        <div className='header'>

            {/* left - logo */}
            <div className='header__logo'>
                <img src='/images/logo.svg' alt='' />
            </div>

            {
                !userName ? (
                    <div className='login__container'>
                        <div onClick={signIn} className='login__btn'>Login</div>
                    </div>
                ) :

                    <>
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
                        <div className='header__userImage' onClick={signOut}>
                            <img src='https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg' alt='' />
                        </div>
                    </>
            }



        </div>
    )
}

export default Header
