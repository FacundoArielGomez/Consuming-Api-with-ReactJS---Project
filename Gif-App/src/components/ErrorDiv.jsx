import './emptySearch.css'
export function ErrorDiv ({error}){

    return(
        <section className='empty-search'>
            <h2>There was an error!</h2>
            <p>{error}</p>
        </section>
    )
}