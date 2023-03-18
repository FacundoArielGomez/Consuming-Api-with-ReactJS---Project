const apiKeys = 'ur1RjBt1v1TO5PHKikS4b97ex97wS0PR'

export async function fetchGifs(query){
    const UrlGif= `https://api.giphy.com/v1/gifs/search?api_key=${apiKeys}&q=${query}&limit=10&offset=0&rating=g&lang=en`
  
    return fetch(UrlGif).
        then(response => response.json()).
        then(gifsResponse => {
            const gifs = gifsResponse.data;
            const namedGifs = gifs?.map(gif=>{
            const idGif = gif.id;
            const imageGif = gif.images.fixed_height.url;
            const titleGif = gif.title;
                
            return {idGif, imageGif, titleGif}
    })
    return namedGifs  
}
).catch(e => {
    throw new Error('Error searching gifs')
})

}
