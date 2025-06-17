import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '/src/components/Search/Search.jsx';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/NavBar/NavBar';
import * as movieService from './services/movieService'
import HomePage from './components/HomePage/HomePage';


const App = () => {
const [navBarState, setNavBarState] = useState('Home');
const [movies, setMovies] = useState([]);

const handleNavBar = (theChosenPage) => {
  setNavBarState(theChosenPage);
};


const fetchDataForMovies = async () => { 
  const data = await movieService.getAllMovies()
  setMovies(data)
}

  
const deleteFromWatchList = async (movieId) => {
  await movieService.deleteMovie(movieId)
  
  fetchDataForMovies()

}
// console.log(deleteFromWatchList)

const handleCheckboxWatched = async (movieId, watchedStatus) => {
  try {
    await movieService.updateMovieWatchedStatus(movieId, watchedStatus);
    fetchDataForMovies();
  } catch (error) {
    console.error('Error updating movie watched status: ', error);
  }
};

// const handleSubmit = async (event) => {
//   event.preventDefault() //5.) prevents us from taking us to a different page
//   let response = await fetch( //6.) use fetch to make an AJAX request to the outside API. 
//       `https://www.omdbapi.com/?apikey=${API}&i=${searchTitle}`
//   )
//   let JSONdata = await response.json(); //7.) return the response as a javascript object
//   console.log(JSONdata);
//   setFoundTitle(JSONdata);
//   fetchDataForMovies();
//   //console.log(props.fetchDataForMovies)
// }

const renderPage = () => {
switch (navBarState) {
  case 'Search':
return <Search fetchDataForMovies={fetchDataForMovies} />;
case 'Watchlist':
  return <Watchlist movies={movies} deleteFromWatchList={deleteFromWatchList} handleCheckboxWatched={handleCheckboxWatched}/>;
default:
    return <HomePage />;
  }
};
 
useEffect(() => {
  fetchDataForMovies()
}
, []);
 
return (
  <div className="main-container">
    <NavBar handleNavBar={handleNavBar} />
    {renderPage()}
  </div>
);
}

export default App;
