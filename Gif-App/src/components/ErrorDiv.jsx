import './messageMainDiv.css'
export function ErrorDiv ({error}){

    return(
        <section className='message-main-div'>
            <h2>There was an error!</h2>
            <p>{error}</p>
        </section>
    )
}