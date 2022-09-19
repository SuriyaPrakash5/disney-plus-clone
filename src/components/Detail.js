import React from 'react'
import './Detail.css'

function Detail() {
    return (
        <div className='detail'>
            <div className='detail__background'>
                <img src='https://cdn.vox-cdn.com/thumbor/kLIufnG5b1BgdpK7gTurukb-mgE=/0x0:3267x2100/1200x800/filters:focal(1373x789:1895x1311)/cdn.vox-cdn.com/uploads/chorus_image/image/63666336/dragons_game_of_thrones.0.jpg' alt='' />
            </div>
            <div className='detail__imageTitle'>
                <img src='https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png' alt='' />
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
