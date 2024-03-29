import {useState, useCallback} from 'react'
import {fetchGifs} from '../services/fetchGifs'

export const useFetchingGifs = ()=>{
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getGifs= useCallback((search)=>{
        if(search === '') return
        setLoading(true)
        setError(null)

        fetchGifs(search).
        then(gifsResponse => {          
            localStorage.setItem("gifs", JSON.stringify(gifsResponse))           
            setGifs(gifsResponse)           
            setLoading(false)         
        }).catch(e => {
        setError(e.message)
        }
        )
},[])

    return ({gifs, getGifs, loading, error})
}
