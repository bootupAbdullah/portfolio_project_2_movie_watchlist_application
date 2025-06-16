// <------------------------------------------- IMPORT AND CONFIGURATION -------------------------->
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
dotenv.config();
const app = express();
// <------------------------------------------- DATABASE CONNECTION------------------------------->
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

// <------------------------------------------- CONRTROLLERS ------------------------------------->
const movieCtrl = require("./controllers/movies")
// <------------------------------------------- MIDDLEWARE --------------------------------------->
app.use(express.json());
app.use(cors())

// !! <-----------------------------------------ROUTES -------------------------------------------->

// <---------------------------------------------- POST ROUTE ------------------------------------->
// #1
app.post('/movies', movieCtrl.firstCommand);

// <---------------------------------------------- GET ROUTE ------------------------------------->
// #2
app.get('/movies', movieCtrl.secondCommand);

// <---------------------------------------------- DELETE ROUTE ----------------------------------->
// #3
app.delete('/movies/:movieId', movieCtrl.thirdCommand);

// <---------------------------------------------- PUT ROUTE -------------------------------------->
// #4
app.put('/movies/:movieId', movieCtrl.fourthCommand);


// <------------------------------------------- Start Server --------------------------------------->
app.listen(3001, () => {
  console.log('movie recommendation app is live, start posting');
});