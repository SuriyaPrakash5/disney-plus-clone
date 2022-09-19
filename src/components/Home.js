import './Home.css'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import { useEffect } from 'react'

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMovies([
            {
                id: "1",
                subTitle: "",
                cardImg: "https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1583118085"
            },
            {
                id: "2",
                subTitle: "",
                cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKHFdJlIICnnuldMTWZnLV5Sd981SOW5_5w&usqp=CAU"
            },
            {
                id: "3",
                subTitle: "",
                cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6P7Go4cBkXnGabF8MTyikPW6bTlxGzWnsw&usqp=CAU"
            },
            {
                id: "4",
                subTitle: "",
                cardImg: "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4584/674584-h"
            },
            {
                id: "5",
                subTitle: "",
                cardImg: "https://m.media-amazon.com/images/M/MV5BMWI3NTU5NTQtNzg4Yi00MjM2LTlmYjgtNDFkOTg0ZGIyOGJlXkEyXkFqcGdeQXVyMTMzNDQwOTcx._V1_FMjpg_UX1000_.jpg"
            },
            {
                id: "6",
                subTitle: "",
                cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvCBJisG1Yvax53lPru-kgtdZKQ7Tyj2kwg&usqp=CAU"
            },
            {
                id: "7",
                subTitle: "",
                cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDCtcpQHerQSsF7mP3FKGizTflEY1gr2Fzg&usqp=CAU"
            },
            {
                id: "8",
                subTitle: "",
                cardImg: "https://i.ytimg.com/vi/ue80QwXMRHg/maxresdefault.jpg"
            },
            {
                id: "9",
                subTitle: "",
                cardImg: "https://flxt.tmsimg.com/assets/p32133_p_v12_ac.jpg"
            },
            {
                id: "10",
                subTitle: "",
                cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CFEC1D150AC3933B41C075EAE8E8316CB01941A5FFEA8D17E957C846D7FD2352/scale?width=506&aspectRatio=2.00&format=jpeg"
            },
            {
                id: "11",
                subTitle: "",
                cardImg: "https://lumiere-a.akamaihd.net/v1/images/p_amongthestars_22303_92d6d5a4.jpeg"
            },
            {
                id: "12",
                subTitle: "",
                cardImg: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_FMjpg_UX1000_.jpg"
            }
        ]))
    }, [dispatch])


    return (
        <div className='home'>
            <ImageSlider />
            <Viewers />
            <Movies />
        </div>
    )
}

export default Home
