import './HomePage.css';

const HomePage = () => {
    return (
    <div className="home-container-content">
        <h1>Welcome to the Watchlist App!</h1>
        <div className='how-to-add-description-container'>
            <h2>How do I add a movie to my watchlist?</h2>
            <ul className='how-to-add-description-1'>
                <li>Go to 'Search' and enter the imdbID of the movie you would like to add</li>
                <li>Once you have found your title, click 'Add To Watchlist' to add it to your Watchlist</li>
                <li>When you get around to watching it, click the 'watched' box to mark it as watched</li>
            </ul>
        </div>
        <div className='how-to-add-description-container'>
            <h2>How do I find an imdbID?</h2>
            <div className='how-to-add-description-1'>
                <ul>
                    <li>Navigate to IMDB and search for a movie you would like to add to your Watchlist</li>
                    <li>After selecting your movie, look at the URL, the ID will be a number listed after /title/, prefaced with tt</li>
                    <li>Copy the number including the 'tt'. For example, Johnnie To's classic 'Election' has the imdbID of 'tt0434008'</li>
                </ul>
            </div>
        </div>
        <div className='how-to-add-description-container'>
            <div className='homepage-image-div-1'>
                <h1>Example of imdbID in URL:</h1>
                <img className='image-1' src='/home_alone_imdb_address.png' alt="Example imdbID in URL" style={{ height: '50px', width: '700px' }} />
            </div>
            <div className='homepage-image-div-2'>
                <img src='/home_alone_movie_poster.png' alt="Home Alone Movie Poster" style={{ height: '550px' }} />
            </div>
        </div>
    </div>
    )
}

export default HomePage