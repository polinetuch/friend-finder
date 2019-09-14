// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8282;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table DATA
// =============================================================
var newUser = [
  {
    routeName: "",
    name: "",
    photo: "",
    scores: "",
  }
];

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});
