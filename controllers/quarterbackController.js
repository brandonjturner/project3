var db = require("../db/models");

module.exports = function(app) {
    
    // POST route for saving a new Quarterback to the db
    app.post("/quarterback/submit", function(req, res) {
        // Create a new quarterback using req.body
        db.Quarterback.create(req.body)
            .then(function(dbQuarterback) {
            // If saved successfully, send the the new Quarterback document to the client
            res.json(dbQuarterback);
            })
            .catch(function(err) {
            // If an error occurs, send the error to the client
            res.json(err);
            });
    });

    // Route for getting all quarterback from the db
    app.get("/quarterback", function(req, res) {
        // console.log("stuff");
        // Using our quarterback model, "find" every quarterback in our db
        db.Quarterback.find({})
        .then(function(dbQuarterback) {
            // console.log("stuff2");
            // If any quarterbacks are found, send them to the client
            res.json(dbQuarterback);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    //gets record of specific quarterback
    app.get("/quarterback/:id", function (req, res) {
        db.Quarterback.find({
            _id: req.params.id
        }).then(function (dbQuarterback) {
            // console.log("Idunno");
            res.json(dbQuarterback)
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });

    // Update Average Pocket Time
    // app.put("/quarterback/:name/:defense", function(req, res) {
    //     db.Quarterback.update({
    //         avgPocketTime : {
    //             name: req.params.name
    //         }
    //     },
    //     {
    //         defense: req.body.avgPocketTime
    //     })
    //     .then(function (data) {
    //         res.status(200).end();
    //     }).catch(function(err) {
    //         // If an error occurs, send it back to the client
    //         res.json(err);
    //     });
    // });

    // Update Average Pocket Time
    app.put("/quarterback/:id", function(req, res) {
        db.Quarterback.update({
            avgPocketTime: req.body
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

    app.delete("/quarterback/:id", function (req, res) {
        // Delete the Quarterback with the id available to us in req.params.id
        db.Quarterback.destroy({
            _id: req.params.id
        }).then(function (dbQuarterback) {
        res.json(dbQuarterback);
        });
    });
}