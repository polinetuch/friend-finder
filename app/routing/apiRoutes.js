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
    var minimumDifference = 40;
    
    for (var i = 0; i < friends.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < friends[i].length; j++) {
            var difference = math.abs(newUser.score[j] - friends[i].score[j]);
            totalDifference += difference;
            if (totalDifference < minimumDifference) {
                var matchingFriend = 0;
                matchingFriend = i;
                minimumDifference = totalDifference
            }
        }
        // friends.push(newUser)
        // res.json(friends[matchingFriend])

    }
}

module.exports = apiRoutes;