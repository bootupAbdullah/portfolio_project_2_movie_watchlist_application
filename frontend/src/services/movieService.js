const API_KEY = "5b053eb2";
const BASE_URL = `http://www.omdbapi.com/`;

const expressAPI = `http://3.90.140.106:3001/movies`;

// https://www.omdbapi.com/?i=tt3896198&apikey=5b053eb2  this is a tester for a correct response

// gets a specific movie by ID number
export const getMovies = async (searchTerm) => {
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
export const getMoviesFromExpress = async () => {
  try {
    const response = await fetch("http://3.90.140.106:3001/movies");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const deleteMoviesFromExpress = async (movieId) => {
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
