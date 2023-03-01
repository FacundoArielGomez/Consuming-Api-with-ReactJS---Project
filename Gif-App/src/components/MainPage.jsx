import React from 'react'
import './mainPage.css'
import {Spinner} from './Spinner'
import {ThereAreNotGifs} from './ThereAreNotGifs'

export const MainPage = ({gifs, loading}) => {

    const thereAreNOTGifs = (gifs.length === 0)

    return (
        <main className="gifs-wrapper">
            {(!(loading) && thereAreNOTGifs) ? <ThereAreNotGifs />: null}
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