const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

//QB Seed
// const qbSeed = [
//     {
//         name: "Tom Brady",
//     },
//     {
//         name: "Drew Brees",
//     },
//     {
//         name: "Blake Bortles",
//     }
// ];

// db.Quarterback
//     .remove({})
//     .then(() => db.Quarterback.collection.insertMany(qbSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

//Defense Seed
const defenseSeed = [
    {
        name: "Patriots",
    },
    {
        name: "Saints",
    },
    {
        name: "Jaguars",
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

//Attempts Seed

const attemptSeed = [
    {
        qbName: "Tom Brady",
        pocketTime: 2.3,
        competion: 1,
        defenderName: "Jaguars",
        hurry: 1
    },
    {
        qbName: "Tom Brady",
        pocketTime: 1.5,
        competion: 1,
        defenderName: "Saints",
        hurry: 0
    },
    {
        qbName: "Tom Brady",
        pocketTime: 2.1,
        competion: 0,
        defenderName: "Saints",
        hurry: 1
    },
    {
        qbName: "Drew Brees",
        pocketTime: 1.9,
        competion: 1,
        defenderName: "Patriots",
        hurry: 1
    },
    {
        qbName: "Drew Brees",
        pocketTime: 1.4,
        competion: 1,
        defenderName: "Jaguars",
        hurry: 0
    },
    {
        qbName: "Drew Brees",
        pocketTime: 2.3,
        competion: 0,
        defenderName: "Jaguars",
        hurry: 1
    },
    {
        qbName: "Blake Bortles",
        pocketTime: 2.3,
        competion: 0,
        defenderName: "Patriots",
        hurry: 1
    },
    {
        qbName: "Blake Bortles",
        pocketTime: 2.0,
        competion: 0,
        defenderName: "Patriots",
        hurry: 1
    },
    {
        qbName: "Blake Bortles",
        pocketTime: 1.8,
        competion: 1,
        defenderName: "Saints",
        hurry: 0
    },
];

db.Attempt
    .remove({})
    .then(() => db.Attempt.collection.insertMany(attemptSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });