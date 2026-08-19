import express from "express";
import { config } from "dotenv";

//import Routes
import movieRoutes from "./routes/movieRoutes.js";

config();

const app = express();

//API Routes
app.use("/movies", movieRoutes);

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//GET, POST, PUT, DELETE
//http://localhost:5001/hello
// json light weight text format that will aloow you to store data using key value pairs

//AUTH - SIGNIN, SIGNOUT

// MOVIE -N GETTING ALL MOVIES

// USER - PROFILE

//WATCHLIST

//DELETE MOVIES
