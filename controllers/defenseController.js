var db = require("../db/models");

module.exports = function(app) {
        
    // POST route for saving a new Defense to the db
    app.post("/defense/submit", function(req, res) {
        // Create a new defense using req.body
        db.Defense.create(req.body)
            .then(function(dbDefense) {
            // If saved successfully, send the the new defense document to the client
            res.json(dbDefense);
            })
            .catch(function(err) {
            // If an error occurs, send the error to the client
            res.json(err);
            });
    });

    // Route for getting all defense from the db
    app.get("/defense", function(req, res) {
        // Using our defense model, "find" every defense in our db
        db.Defense.find({})
        .then(function(dbDefense) {
            // If any defenses are found, send them to the client
            res.json(dbDefense);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    //gets record of specific quarterback
    app.get("/defense/:id", function (req, res) {
        db.Defense.find({
                _id: req.params.id
        }).then(function (data) {
            res.json(data)
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    // Update Given Pocket Time
    app.put("/defense/:id", function(req, res) {
        db.Defense.update({
            givenPocketTime: req.body.givenPocketTime
        },
        {
            _id: req.params.id
        })
        .then(function (data) {
            res.status(200).end();
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    app.delete("/defense/:id", function (req, res) {
        // Delete the Defense with the id available to us in req.params.id
        db.Defense.destroy({
            _id: req.params.id
        }).then(function (dbDefense) {
        res.json(dbDefense);
        });
    });
}