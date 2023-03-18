import {createContext} from 'react'
import {useFetchingGifs} from '../../hooks/useFetchingGifs'
//crear contexto
export const GifsContext = createContext()
//proveer cotnexto

export function GifsProvider ({children}) {

    const {gifs, getGifs, loading, error} = useFetchingGifs()

    return (
        <GifsContext.Provider value={{gifs, getGifs, loading, error}}>
            {children}
        </GifsContext.Provider>
    )
}