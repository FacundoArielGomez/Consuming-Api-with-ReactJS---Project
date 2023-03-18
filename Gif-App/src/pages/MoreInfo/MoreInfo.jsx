import '../../components/messageMainDiv.css'
import './moreInfo.css'
import {Link,useParams} from 'react-router-dom'
import { useContext, useState, useEffect} from 'react'
import { GifsContext } from '../../context/gifsContext/GifsProvider'

export function MoreInfo (){

    const {id} = useParams()

    const {gifs} = useContext(GifsContext)

    const gifsLocalStorage = JSON.parse(localStorage.getItem("gifs"))

    const getSingleGif = (id)=>{
        return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=ur1RjBt1v1TO5PHKikS4b97ex97wS0PR`)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const {title, id} = data
            const {url} = data.images.fixed_height

            return ({'imageGif': url, 'titleGif': title, idGif: id})
        })
    }

    const renderGifs = gifs?.find(gif => gif.idGif === id) || gifsLocalStorage?.find(gif => gif.idGif === id)

    const [singleGif, setSingleGif] = useState(renderGifs)

    useEffect(()=>{
        if(!singleGif){
            getSingleGif(id)
            .then(gif => {setSingleGif(gif)})
        }
    },[])



    return(
        <>
        <div className='button'><Link to='/'><button>BACK</button></Link></div>
        <main className="more-info">
            <h2>{singleGif?.titleGif}</h2>
            <img src={singleGif?.imageGif}></img>
        </main>
        </>
    )
}
