import React, {useState, useId, useCallback} from 'react'
import './header.css'
import {MainPage} from './Mainpage'
import debounce from "just-debounce-it"
import { useFetchingGifs } from '../hooks/useFetchingGifs'
import {EmptySearch} from './EmptySearch'
import {ErrorDiv} from './ErrorDiv'

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
        {error ? <ErrorDiv error={error}/> : (search === '') ? <EmptySearch />:<MainPage gifs={gifs} loading={loading}></MainPage>}
        </>
    )
}