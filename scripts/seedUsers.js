const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

// Defense Seed
const usersSeed= [
    {
        firstName: "Louis",
	    lastName: "Kane",
	    local: {
		    username: "LouisKane",
		    password: "kanetrain"
	    },
	    google: {
		    googleId: null
	    },
	    photos: [],
	    players:[]
    },
    {
        firstName: "Alex",
	    lastName: "Ball",
	    local: {
		    username: "AlexanderTheGreat",
		    password: "Baller"
	    },
	    google: {
		    googleId: null
	    },
	    photos: [],
	    players:[]
    },
    {
        firstName: "Charlie",
	    lastName: "Leathers",
	    local: {
		    username: "CharlesInCharge",
		    password: "Pleathers"
	    },
	    google: {
		    googleId: null
	    },
	    photos: [],
	    players:[]
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(usersSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });