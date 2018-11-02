const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

//QB Seed
// const qbSeed = [
//     {
//         name: "Patrick Mahomes",
//         avgPocketTime: 2.0,
//         completionPercentage: 0.45,
//         vsDefenseCompletionPercentage: {
//             "49ers": 0.45,
//             "bears": 0.45,
//             "bengals": 0.45,
//             "bills": 0.45,
//             "broncos": 0.45,
//             "browns": 0.45,
//             "buccaneers": 0.45,
//             "cardinals": 0.45,
//             "chargers": 0.45,
//             "chiefs": 0.45,
//             "colts": 0.45,
//             "cowboys": 0.45,
//             "dolphins": 0.45,
//             "eagles": 0.45,
//             "falcons": 0.45,
//             "giants": 0.45,
//             "jaguars": 0.45,
//             "jets": 0.45,
//             "lions": 0.45,
//             "packers": 0.45,
//             "panthers": 0.45,
//             "patriots": 0.45,
//             "raiders": 0.45,
//             "rams": 0.45,
//             "ravens": 0.45,
//             "redskins": 0.45,
//             "saints": 0.45,
//             "seahawks": 0.45,
//             "steelers": 0.45,
//             "texans": 0.45,
//             "titans": 0.45,
//             "vikings": 0.45
//         }
//     },
//     {
//         name: "Andy Dalton",
//         avgPocketTime: 1.8,
//         completionPercentage: 0.5,
//         vsDefenseCompletionPercentage: {
//             "49ers": 0.5,
//             "bears": 0.5,
//             "bengals": 0.5,
//             "bills": 0.5,
//             "broncos": 0.5,
//             "browns": 0.5,
//             "buccaneers": 0.5,
//             "cardinals": 0.5,
//             "chargers": 0.5,
//             "chiefs": 0.5,
//             "colts": 0.5,
//             "cowboys": 0.5,
//             "dolphins": 0.5,
//             "eagles": 0.5,
//             "falcons": 0.5,
//             "giants": 0.5,
//             "jaguars": 0.5,
//             "jets": 0.5,
//             "lions": 0.5,
//             "packers": 0.5,
//             "panthers": 0.5,
//             "patriots": 0.5,
//             "raiders": 0.5,
//             "rams": 0.5,
//             "ravens": 0.5,
//             "redskins": 0.5,
//             "saints": 0.5,
//             "seahawks": 0.5,
//             "steelers": 0.5,
//             "texans": 0.5,
//             "titans": 0.5,
//             "vikings": 0.5
//         }
//     },
//     {
//         name: "Andrew Luck",
//         avgPocketTime: 2.2,
//         completionPercentage: 0.33,
//         vsDefenseCompletionPercentage: {
//             "49ers": 0.33,
//             "bears": 0.33,
//             "bengals": 0.33,
//             "bills": 0.33,
//             "broncos": 0.33,
//             "browns": 0.33,
//             "buccaneers": 0.33,
//             "cardinals": 0.33,
//             "chargers": 0.33,
//             "chiefs": 0.33,
//             "colts": 0.33,
//             "cowboys": 0.33,
//             "dolphins": 0.33,
//             "eagles": 0.33,
//             "falcons": 0.33,
//             "giants": 0.33,
//             "jaguars": 0.33,
//             "jets": 0.33,
//             "lions": 0.33,
//             "packers": 0.33,
//             "panthers": 0.33,
//             "patriots": 0.33,
//             "raiders": 0.33,
//             "rams": 0.33,
//             "ravens": 0.33,
//             "redskins": 0.33,
//             "saints": 0.33,
//             "seahawks": 0.33,
//             "steelers": 0.33,
//             "texans": 0.33,
//             "titans": 0.33,
//             "vikings": 0.33
//         }
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
        name: "CIN",
        givenPocketTime: 5
    },
    {
        name: "CHI",
        givenPocketTime: 5
    },
    {
        name: "IND",
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

//Attempts Seed

// const attemptSeed = [
//     {
//         qbName: "Tom Brady",
//         pocketTime: 2.3,
//         competion: 1,
//         defenderName: "Jaguars",
//         hurry: 1
//     },
//     {
//         qbName: "Tom Brady",
//         pocketTime: 1.5,
//         competion: 1,
//         defenderName: "Saints",
//         hurry: 0
//     },
//     {
//         qbName: "Tom Brady",
//         pocketTime: 2.1,
//         competion: 0,
//         defenderName: "Saints",
//         hurry: 1
//     },
//     {
//         qbName: "Drew Brees",
//         pocketTime: 1.9,
//         competion: 1,
//         defenderName: "Patriots",
//         hurry: 1
//     },
//     {
//         qbName: "Drew Brees",
//         pocketTime: 1.4,
//         competion: 1,
//         defenderName: "Jaguars",
//         hurry: 0
//     },
//     {
//         qbName: "Drew Brees",
//         pocketTime: 2.3,
//         competion: 0,
//         defenderName: "Jaguars",
//         hurry: 1
//     },
//     {
//         qbName: "Blake Bortles",
//         pocketTime: 2.3,
//         competion: 0,
//         defenderName: "Patriots",
//         hurry: 1
//     },
//     {
//         qbName: "Blake Bortles",
//         pocketTime: 2.0,
//         competion: 0,
//         defenderName: "Patriots",
//         hurry: 1
//     },
//     {
//         qbName: "Blake Bortles",
//         pocketTime: 1.8,
//         competion: 1,
//         defenderName: "Saints",
//         hurry: 0
//     },
// ];

// db.Attempt
//     .remove({})
//     .then(() => db.Attempt.collection.insertMany(attemptSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });