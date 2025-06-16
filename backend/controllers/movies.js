// <------------------------------------------- MODEL IMPORT ----------------------------->
const Movie = require('../models/movie');

// <------------------------------------------- POST ROUTE-------------------------------->
// #1
// HTTP POST - 
const firstCommand = async (req, res) => {
    const createdMovie = await Movie.create(req.body)
    res.json(createdMovie)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #2
// HTTP GET - 
const secondCommand = async (req, res) => {
    const foundMovies = await Movie.find()
    res.json(foundMovies)
}

// <------------------------------------------- DELETE ROUTE-------------------------------->
// #3
// HTTP DELETE -
const thirdCommand = async (req, res) => {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId)
    res.json(deletedMovie)
}


// <------------------------------------------- PUT ROUTE-------------------------------->
// #3
// HTTP PUT -
 const fourthCommand = async (req, res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.movieId, 
        req.body, 
        {new:true}
    )
    res.json(updatedMovie)
 }



// <--------------------------------------------EXPORTS ------------------------------------------------------>

module.exports = {
    firstCommand,
    secondCommand,
    thirdCommand,
    fourthCommand
}