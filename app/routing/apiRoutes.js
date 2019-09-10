// dependencies
var friends = require("../data/friends");

function apiRoutes() {
    // display all tables
    app.get("api/home.html", function(req, res) {
        return res.json(friends);
    }
    app.get("api/survey.html", function(req, res) {
        return res.json(friends);
    }

}