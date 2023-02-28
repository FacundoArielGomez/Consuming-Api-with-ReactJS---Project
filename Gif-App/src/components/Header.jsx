import React, {useState, useRef, useCallback} from 'react'
import './header.css'
import {MainPage} from './Mainpage'
import debounce from "just-debounce-it"
import { useFetchingGifs } from '../hooks/useFetchingGifs'
import {EmptySearch} from './EmptySearch'

export function Header(){

    const [search, setSearch] = useState('')

    const {gifs, getGifs, loading} = useFetchingGifs()
    
    const debouncedCallApiFetch = useCallback(debounce((search) => {
        return(
            getGifs(search)
        )
    }, 400),[getGifs]);


    const handleInput = (e)=>{
        setSearch(e.target.value)
        debouncedCallApiFetch(e.target.value)   
    }

    return (
        <>
        <header className="header">

            <h1>Gif App</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e)=> handleInput(e)} value={search} name="mainSearch" placeholder="John Wick, pets, fun, etc"></input>
            <button>Search</button>
            </form>

        </header>
        {(search === '') ? <EmptySearch />:<MainPage gifs={gifs} loading={loading}></MainPage>}
        </>
    )
}