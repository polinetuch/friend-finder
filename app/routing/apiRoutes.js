// dependencies
var friends = require("../data/friends");

function apiRoutes(app) {
    // display all tables
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    console.log(friends)

    app.post("/api/friends", function(req, res) {
        console.log(req.body.score)

        var newUser = req.body;
        
        console.log(newUser)
        for (var i = 0; i < newUser.score.length; i++){
            newUser.score[i] = parseInt(newUser.score[i])
            console.log(newUser.score[i])
        }

    })
    

}

module.exports = apiRoutes;