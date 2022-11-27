//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/home", function(req, res) {

  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

  https.get(url,
    function(ress) {


      ress.on("data", function(data) {
        const jokeData = JSON.parse(data)
        const myjoke = jokeData.joke
        res.render('home', {
          joke: myjoke
        })
      })

    })

});










app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
