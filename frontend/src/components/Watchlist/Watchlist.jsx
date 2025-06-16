import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Watchlist.css"


const Watchlist = ({ movies, deleteFromWatchList, handleCheckboxWatched}) => {
  // console.log("Watchlist.jsx: " + deleteFromWatchList)
  // console.log("Watchlist.jsx: " + handleCheckboxWatched)
  
    return ( 
    <>
    <div id="watchlistDiv">
      <h1>Watchlist</h1>
      <ul id="watchlistList">
        {movies.map((movie, index) => ( // Iterate over the movies array
          <li id="watchlistItem" key={index}> {/* Provide a unique key for each list item */}
            <MovieCard movie={movie} deleteFromWatchList={deleteFromWatchList} handleCheckboxWatched={handleCheckboxWatched} /> {/* Pass each movie object to the MovieCard component */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Watchlist;
