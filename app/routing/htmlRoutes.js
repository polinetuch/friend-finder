var path = require("path");

// Routes
function htmlRoutes(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}

// Exporting a module - htmlRoutes function
module.exports = htmlRoutes;