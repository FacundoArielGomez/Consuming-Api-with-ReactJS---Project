import React, {useState, useEffect, useCallback} from 'react'
import './mainPage.css'
import {fetchGifs} from '../services/fetchGifs'
import debounce from "just-debounce-it";





export const MainPage = ({search}) => {
    const [gifs, setGifs] = useState([])

    const debouncedCallApiFetch = useCallback(debounce((searchxd) => {
        return(
            fetchGifs(searchxd).
            then(gifs => setGifs(gifs))
        )
    }, 500),[fetchGifs]);

    useEffect(()=>{
        debouncedCallApiFetch(search)   
    },[search])
   
    return (
        
        <main className="gifs-wrapper">
            {gifs?.map(gif => {
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