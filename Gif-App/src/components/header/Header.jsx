import React, {useState, useId, useCallback, useEffect} from 'react'
import './header.css'
import {MainPage} from '../../pages/Home/MainPage'
import debounce from "just-debounce-it"
import { useFetchingGifs } from '../../hooks/useFetchingGifs'


export function Header(){
    const mainSearchInput = useId()

    const [search, setSearch] = useState('')

    const {gifs, getGifs, loading, error} = useFetchingGifs()
    
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
            <label htmlFor={mainSearchInput}>What do you want to see?</label>
            <input type="text" id={mainSearchInput} onChange={(e)=> handleInput(e)} value={search} name="mainSearch" placeholder="John Wick, pets, fun, etc"></input>
            </form>

        </header>
        <MainPage gifs={gifs} loading={loading} error={error} search={search}></MainPage>
        </>
    )
}