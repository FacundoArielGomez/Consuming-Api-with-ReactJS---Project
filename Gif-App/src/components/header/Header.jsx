import React, {useState, useId, useCallback} from 'react'
import './header.css'
import {MainPage} from '../../pages/Home/MainPage'
import {MoreInfo} from '../../pages/MoreInfo/MoreInfo'
import debounce from "just-debounce-it"
import {Routes, Route, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {GifsContext} from '../../context/gifsContext/GifsProvider'


export function Header(){
    const mainSearchInput = useId()

    const [search, setSearch] = useState('')

    const {gifs, getGifs, loading, error} = useContext(GifsContext)

    
    const debouncedCallApiFetch = useCallback(debounce((search) => {
        return(
            getGifs(search)
        )
    }, 400),[getGifs]);

    const handleInput = (e)=>{
        setSearch(e.target.value)
        debouncedCallApiFetch(e.target.value)   
    }

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate("/");

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
      
            <Routes>
                <Route path='/' element={<MainPage gifs={gifs} loading={loading} error={error} search={search}></MainPage>}></Route>
                <Route path='/moreInfo/:id' element={<MoreInfo></MoreInfo>}></Route>
                <Route path='/moreinfo' element={<MoreInfo/>} />
                <Route path='/moreinfo/*' element={<MoreInfo/>} />
                <Route path='https://gif-4zjb7hxyy-facundoarielgomez.vercel.app/moreInfo/*' element={<MoreInfo/>}></Route>
            </Routes>
        

        </>
    )
}