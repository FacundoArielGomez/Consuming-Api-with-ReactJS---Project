import React from 'react'
import './mainPage.css'

export const MainPage = ({gifs, loading}) => {
    return (
        <main className="gifs-wrapper">
            {
            loading ? <h2>LOADING</h2> :
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