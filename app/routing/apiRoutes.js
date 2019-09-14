// dependencies
var friends = require("../data/friends");

function apiRoutes(app) {
    // display all tables
    app.get("/api/friends", function(req, res) {
        return res.json(friends);

    });

    app.post("/api/friends", function(req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };

        var scoreArray = [];
        var friendOneScore = req.body.score
        for (var i = 0; i < friendOneScore.length; i++) {
            scoreArray.push(parseInt(friendOneScore[i]))
        }
        newFriend.score = scoreArray;
        console.log(scoreArray);

        var scoreComparisonArr = [];
        for (var i = 0; i < friends.length; i++) {
            var currentScore = 0;
            for (var j = 0; j < newFriend.score.length; j++) {
                currentScore += Math.abs(newFriend.score[j] - friends[i].score[j]);
                }
                scoreComparisonArr.push(currentScore)
            }
        console.log(scoreComparisonArr)

        var matchingFriend = 0;
        for (var i = 1; i < scoreComparisonArr.length; i++) {
            if (scoreComparisonArr[i] <= scoreComparisonArr[matchingFriend]) {
                matchingFriend = i;
            }
        }

        var compatibleFriend = friends[matchingFriend]
        res.json(compatibleFriend)
    });
}

module.exports = apiRoutes;