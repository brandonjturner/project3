const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

// Defense Seed
const defenseSeed = [
    {
        name: "ATL",
        givenPocketTime: 5
    },
    {
        name: "ARI",
        givenPocketTime: 5
    },
    {
        name: "BAL",
        givenPocketTime: 5
    },
    {
        name: "BUF",
        givenPocketTime: 5
    },
    {
        name: "CAR",
        givenPocketTime: 5
    },
    {
        name: "CHI",
        givenPocketTime: 5
    },
    {
        name: "CIN",
        givenPocketTime: 5
    },
    {
        name: "CLE",
        givenPocketTime: 5
    },
    {
        name: "DAL",
        givenPocketTime: 5
    },
    {
        name: "DEN",
        givenPocketTime: 5
    },
    {
        name: "DET",
        givenPocketTime: 5
    },
    {
        name: "GB",
        givenPocketTime: 5
    },
    {
        name: "HOU",
        givenPocketTime: 5
    },
    {
        name: "IND",
        givenPocketTime: 5
    },
    {
        name: "JAX",
        givenPocketTime: 5
    },
    {
        name: "KC",
        givenPocketTime: 5
    },
    {
        name: "LAC",
        givenPocketTime: 5
    },
    {
        name: "LAR",
        givenPocketTime: 5
    },
    {
        name: "MIA",
        givenPocketTime: 5
    },
    {
        name: "MIN",
        givenPocketTime: 5
    },
    {
        name: "NE",
        givenPocketTime: 5
    },
    {
        name: "NO",
        givenPocketTime: 5
    },
    {
        name: "NYG",
        givenPocketTime: 5
    },
    {
        name: "NYJ",
        givenPocketTime: 5
    },
    {
        name: "OAK",
        givenPocketTime: 5
    },
    {
        name: "PHI",
        givenPocketTime: 5
    },
    {
        name: "PIT",
        givenPocketTime: 5
    },
    {
        name: "SEA",
        givenPocketTime: 5
    },
    {
        name: "SF",
        givenPocketTime: 5
    },
    {
        name: "TB",
        givenPocketTime: 5
    },
    {
        name: "TEN",
        givenPocketTime: 5
    },
    {
        name: "WAS",
        givenPocketTime: 5
    }
];

db.Defense
    .remove({})
    .then(() => db.Defense.collection.insertMany(defenseSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });