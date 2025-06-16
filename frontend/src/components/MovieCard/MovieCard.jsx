import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  // console.log("MovieCard.jsx: " + props.deleteFromWatchList)
  // console.log("MovieCard.jsx: " + props.handleCheckboxWatched)
  return (
      <main className={`card ${props.movie.watched ? 'watched' : 'not-watched'}`}>
        <img src={props.movie.Poster} alt="movie poster" />
      {/* {console.log(props.movie)} */}
      <div className="card-content">
        <h2>{props.movie.Title}</h2>
          <ul className="movieInfo">
            <li>Actors: {props.movie.Actors}</li>
            <li>Plot: {props.movie.Plot}</li>
            <li>Year: {props.movie.Year}</li>
            <li>Genre: {props.movie.Genre}</li>
            <li>Runtime: {props.movie.Runtime}</li>
            <li>
            <input className="input-watched-checkbox" 
            type="checkbox" 
            checked={props.movie.watched}
            onChange={() => props.handleCheckboxWatched(props.movie._id, !props.movie.watched )}
            id="item1"
            />
            <label htmlFor="item1" id="checkboxLabel">{props.movie.watched ? 'watched' : 'not watched' }</label>
            </li>
          </ul>
        <button className="delete-button" onClick={() => props.deleteFromWatchList(props.movie._id)}>Delete</button>
      </div>
    </main>
  );
};

export default MovieCard;
