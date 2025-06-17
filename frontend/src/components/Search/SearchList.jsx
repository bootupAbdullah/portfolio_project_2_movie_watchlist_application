import MovieCard from "../MovieCard/MovieCard"
import "./Search.css"
import { addMovie } from "../../services/movieService";

const SearchList = (props) => {

    const movie = props.foundTitle


// ...existing code...

const handleAdd = async (event) => {
    try {
        await addMovie({
            Title: movie.Title,
            Plot: movie.Plot,
            Runtime: movie.Runtime,
            Rated: movie.Rated,
            Released: movie.Released,
            Genre: movie.Genre,
            Poster: movie.Poster,
            Director: movie.Director,
            Actors: movie.Actors,
            Awards: movie.Awards,
            watched: false,
        });
        props.fetchDataForMovies();
        changeButtonColorOnClick(event);
    } catch (error) {
        console.log(error);
    }
};

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
                onClick={handleAdd}
                id="addToWatchlistButton">
                Add To Watchlist
            </button>
        </>
        }
    </>
);
}

export default SearchList