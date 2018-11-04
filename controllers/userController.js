var db = require("../db/models");

module.exports = function(app) {

    // POST route for saving a new QB to the User DB Array
    app.put("/user/:userid/qb/:id", function(req, res) {
        // Create a new qb within Users using req.body
        db.User.updateOne({
            _id: req.params.userid
        },
        {
            $push: { "players": req.params.id }
        })
        .then(function(dbUser) {
        // If saved successfully, send the the new defense document to the client
            res.json(dbUser);
        })
        .catch(function(err) {
        // If an error occurs, send the error to the client
            res.json(err);
            console.log(err);
        });
    });

    // Route for getting all Users from the db
    app.get("/user/:userid/qb", function(req, res) {
        // Using our defense model, "find" every defense in our db
        db.User.find(
        {
            _id: req.params.userid
        })
        .then(function(dbUser) {
            // If any defenses are found, send them to the client
            res.json(dbUser[0].players);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    app.put("/user/:userid/qb/delete/:id", function (req, res) {
        // Delete the User with the id available to us in req.params.id
        db.User.updateOne({
            _id: req.params.userid
        },
        {
            $pull: { "players": req.params.id }
        })
        .then(function (dbDefense) {
        res.json(dbDefense);
        })
        .catch(function(err) {
        // If an error occurs, send the error to the client
            res.json(err);
            console.log(err);
        });
    });
}