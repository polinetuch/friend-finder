// dependencies
var friends = require("../data/friends");

function apiRoutes(app) {
    // display all tables
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
        console.log(friends)
    });

    app.post("/api/friends", function(req, res) {

        friends.push(allFriends);
        res.json(true);
        var userOne = req.body;
    

    })
    

}

module.exports = apiRoutes;