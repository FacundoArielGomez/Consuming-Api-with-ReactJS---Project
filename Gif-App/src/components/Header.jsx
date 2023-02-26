import React, {useState} from 'react'
import './header.css'


import {MainPage} from './Mainpage'

export function Header(){

    const [search, setSearch] = useState('Goku')

    function handleSubmit (e){
        e.preventDefault()
        setSearch(search)
    }

    const handleInput = (e)=>{
        setSearch(e.target.value)
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
        <MainPage search={search}></MainPage>
        </>
    )
}