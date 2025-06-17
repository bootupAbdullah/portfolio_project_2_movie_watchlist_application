import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { movie, handleCheckboxWatched, deleteFromWatchList } = props;

  return (
    <main className={`card ${movie.watched ? 'watched' : 'not-watched'}`}>
      <img src={movie.Poster} alt="movie poster" />
      <div className="card-content">
        <h2>{movie.Title}</h2>
        <ul className="movieInfo">
          <li>Actors: {movie.Actors}</li>
          <li>Plot: {movie.Plot}</li>
          <li>Year: {movie.Year}</li>
          <li>Genre: {movie.Genre}</li>
          <li>Runtime: {movie.Runtime}</li>
          {typeof handleCheckboxWatched === "function" && (
            <li>
              <input
                className="input-watched-checkbox"
                type="checkbox"
                checked={movie.watched}
                onChange={() => handleCheckboxWatched(movie._id, !movie.watched)}
                id={`watched-checkbox-${movie._id}`}
              />
              <label htmlFor={`watched-checkbox-${movie._id}`} id="checkboxLabel">
                {movie.watched ? 'watched' : 'not watched'}
              </label>
            </li>
          )}
        </ul>
        {typeof deleteFromWatchList === "function" && (
          <button
            className="delete-button"
            onClick={() => deleteFromWatchList(movie._id)}
          >
            Delete
          </button>
        )}
      </div>
    </main>
  );
};

export default MovieCard;