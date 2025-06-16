// <------------------------------------------- Imports and Configuration ------------------------------->
const  mongoose = require ('mongoose');
// <------------------------------------------- Schemas ------------------------------------------------->

const movieSchema = new mongoose.Schema({
        Title: String,
        Plot: String,
        Runtime: String,
        Rated: String,
        Released: Date,
        Genre: String,
        Poster: String,
        Director: String, 
        Actors: String,
        Awards: String,
    watched: {
        type: Boolean,
        default: false
    }
});

// <------------------------------------------- Model ---------------------------------------------------->
const Movie = mongoose.model('Movie', movieSchema);
// <------------------------------------------- Export --------------------------------------------------->
module.exports = Movie;