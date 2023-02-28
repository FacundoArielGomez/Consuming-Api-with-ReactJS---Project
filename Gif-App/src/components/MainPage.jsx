import React from 'react'
import './mainPage.css'
import {Spinner} from './Spinner'

export const MainPage = ({gifs, loading}) => {
    return (
        <main className="gifs-wrapper">
            {
            loading ? <Spinner /> :
                gifs?.map(gif => {
                    return(
                    <div className="single-gif" key={gif.idGif}>
                        <h2>{gif.titleGif}</h2>
                        <img src={gif.imageGif}></img>
                    </div>
                    )
                }
                )
            }
        </main>
        
    )
}