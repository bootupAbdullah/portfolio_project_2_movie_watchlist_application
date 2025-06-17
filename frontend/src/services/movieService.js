const API_KEY = "5b053eb2";
const BASE_URL = `http://www.omdbapi.com/`;

const expressAPI = import.meta.env.VITE_EXPRESS_API;

// Get a specific movie by ID number from OMDB
export const getMoviesbyId = async (searchTerm) => {
  const queryString = `?i=${searchTerm}&apikey=${API_KEY}`;
  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const data = await response.json();
    // console.log(data); // Uncomment for debugging
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Get all movies from your Express API (DB)
export const getAllMovies = async () => {
  try {
    const response = await fetch(expressAPI);
    const data = await response.json();
    // console.log(data); // Uncomment for debugging
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

// Add a movie to your Express API (DB)
export const addMovie = async (movie) => {
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

// Update a movie's watched status
export const updateMovieWatchedStatus = async (movieId, watchedStatus) => {
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

// Delete a movie from your Express API (DB)
export const deleteMovie = async (movieId) => {
  try {
    const response = await fetch(`${expressAPI}/${movieId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    await response.json();
  } catch (error) {
    console.error('deleteFromWatchList returning error: ', error);
    return { error: error.message };
  }
};