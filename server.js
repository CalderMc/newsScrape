var mongoose = require("mongoose");
var express = require("express");
var exphbs = require("express-handlebars"); 
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
const PORT = process.env.PORT || 5000;

//Initialize Express
var app = express();

//Connect to MongoDB
const mongo_uri = process.env.MONGO_URI || "mongodb://localhost/newsScrape"
mongoose.connect(mongo_uri);

const apiRoutes = require("./routes/api.js");
const routes = require("./routes/index.js");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use(routes);

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});