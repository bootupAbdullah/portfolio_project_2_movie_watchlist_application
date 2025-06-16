import MovieCard from "../MovieCard/MovieCard"
import axios from 'axios'
import "./Search.css"

const SearchList = (props) => {

    const movie = props.foundTitle


    const handleAdd = () => {
        //event.preventDefault()
            let data = JSON.stringify({
            "Title": `${movie.Title}`,
            "Plot": `${movie.Plot}`,
            "Runtime": `${movie.Runtime}`,
            "Rated": `${movie.Rated}`,
            "Released": `${movie.Released}`,
            "Genre": `${movie.Genre}`,
            "Poster": `${movie.Poster}`,
            "Director": `${movie.Director}`,
            "Actors": `${movie.Actors}`,
            "Awards": `${movie.Awards}`,
            "watched": "false",
            });

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://3.90.140.106:3001/movies',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data));
            props.fetchDataForMovies(); //needs to be here to it is difinitively called after the post is finished

            })
            .catch((error) => {
            console.log(error);
            });
        //console.log("Calling fetch data for movies")
        //props.fetchDataForMovies();
        //console.log("MOVIES FETCHED")
    }

    const changeButtonColorOnClick = (event) => {
        event.target.className = 'submitted'
        event.target.innerHTML = 'Added to Watchlist!'
    }

    return (
        <>
            {movie === '' ? <br /> :
            <>
                <MovieCard movie={movie} />
                <button 
                    onClick={() => {
                        handleAdd();
                        changeButtonColorOnClick(event);
                    }}
                    id="addToWatchlistButton">
                    Add To Watchlist
                </button>
            </>
            }
        </>
    );
}

export default SearchList