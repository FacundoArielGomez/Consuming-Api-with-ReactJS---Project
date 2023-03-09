import React from 'react'
import './mainPage.css'
import {Spinner} from '../../components/spinner/Spinner'
import {ThereAreNotGifs} from '../../components/thereAreNotGifs/ThereAreNotGifs'
import {EmptySearch} from '../../components/EmptySearch'
import {ErrorDiv} from '../../components/ErrorDiv'

export const MainPage = ({gifs, loading, search, error}) => {

    const thereAreNOTGifs = (gifs.length === 0)

    return (
        <main className="gifs-wrapper">
            {(!(loading) && thereAreNOTGifs) ? <ThereAreNotGifs />: null}
            
            {
            error ? <ErrorDiv/> :
            (search === '') ? <EmptySearch/> :
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