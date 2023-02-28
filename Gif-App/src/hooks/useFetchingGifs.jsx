import {useState, useCallback} from 'react'
import {fetchGifs} from '../services/fetchGifs'

export const useFetchingGifs = ()=>{
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getGifs= useCallback((search)=>{
    try{
        setLoading(true)
        setError(null)
        fetchGifs(search).
        then(gifsResponse => {             
            setGifs(gifsResponse)
            setLoading(false)
        })
    }catch(e){
        setError(e.message)
    }
},[])

    return ({gifs, getGifs, loading, error})
}
