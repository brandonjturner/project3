var db = require("../db/models");

module.exports = function(app) {
            
    // POST route for saving a new Attempt to the db
    app.post("/attempt/submit", function(req, res) {
        // Create a new attempt using req.body
        db.Attempt.create(req.body)
            .then(function(dbAttempt) {
            // If saved successfully, send the the new attempt document to the client
            res.json(dbAttempt);
            })
            .catch(function(err) {
            // If an error occurs, send the error to the client
            res.json(err);
            });
    });

    // Route for getting all attempts from the db
    app.get("/attempt", function(req, res) {
        // Using our Attempt model, "find" every attempt in our db
        db.Attempt.find({})
        .then(function(dbAttempt) {
            // If any Attempts are found, send them to the client
            res.json(dbAttempt);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    //gets records of attempts tied to id
    app.get("/attempt/quarterback/:id", function (req, res) {
        db.Attempt.findAll({
                _id: req.params.id
        }).then(function (data) {
            res.json(data)
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    //gets records of attempts tied to defense
    app.get("/attempt/defense/:id", function (req, res) {
        db.Attempt.find({
                _id: req.params.id
        }).then(function (data) {
            res.json(data)
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    app.delete("/attempt/:id", function (req, res) {
        // Delete the Attempt with the id available to us in req.params.id
        db.Attempt.destroy({
            _id: req.params.id
        }).then(function (dbAttempt) {
        res.json(dbAttempt);
        });
    });
}