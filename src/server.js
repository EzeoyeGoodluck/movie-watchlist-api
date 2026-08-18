const express = require("express");

const app = express();

app.get("/hello" , (req,  res) => {
    res.json({message: "Hello world"})

});

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