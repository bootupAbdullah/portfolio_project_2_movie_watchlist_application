const API_KEY = "5b053eb2";
const BASE_URL = `http://www.omdbapi.com/`;

const expressAPI = import.meta.env.VITE_EXPRESS_API;


// https://www.omdbapi.com/?i=tt3896198&apikey=5b053eb2  this is a tester for a correct response

// gets a specific movie by ID number
export const getMoviesbyId   = async (searchTerm) => {
  const queryString = `?i=${searchTerm}&apikey=${API_KEY}`;

  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// snag movies from express api. gets everything from the DB.
export const getAllMovies = async () => {
  try {
    const response = await fetch(expressAPI);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
console.log(expressAPI)

export const addMovie = async (movie) => {
  const expressAPI = import.meta.env.VITE_EXPRESS_API;
  try {
    const response = await fetch(expressAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};

export const updateMovieWatchedStatus = async (movieId, watchedStatus) => {
  const expressAPI = import.meta.env.VITE_EXPRESS_API;
  try {
    const response = await fetch(`${expressAPI}/${movieId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ watched: watchedStatus }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating movie watched status: ', error);
    throw error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await fetch(expressAPI + '/' + movieId, {
      method: 'delete'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`) // <3 - Checks for HTTP response status before attempting to parse it as JSON.
    }
    await response.json(); 
    
  } catch (error) {
    console.error('deleteFromWatchList returning error: ', error) //Console 'logs' or 'records' information
    return {error: error.message} //An actionable step due to an error to control the flow of program / resolve errors or other condiitons that affect program execution.
  }
}





// getMovies("tt3896198"); //this is a test and works to pull Guardians of the galaxiy information

// const response = await fetch(`https://www.omdbapi.com/${queryString}`)
// const data = await response.json()
// console.log(data);
// return data

// getMoviesFromExpress()
