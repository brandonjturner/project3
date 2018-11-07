const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

//QB Seed
const qbSeed = [
    {
        name: "Patrick Mahomes",
        avgPocketTime: 2.0,
        completionPercentage: 0.45,
        image: "https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08282018/30123.png",
        currentTeam: "KC",
        vsDefenseCompletionPercentage: {
            "ATL": 0.45,
            "ARI": 0.45,
            "BAL": 0.45,
            "BUF": 0.45,
            "CAR": 0.45,
            "CHI": 0.45,
            "CIN": 0.45,
            "CLE": 0.45,
            "DAL": 0.45,
            "DEN": 0.45,
            "DET": 0.45,
            "GB": 0.45,
            "HOU": 0.45,
            "IND": 0.45,
            "JAX": 0.45,
            "KC": 0.45,
            "LAC": 0.45,
            "LAR": 0.45,
            "MIA": 0.45,
            "MIN": 0.45,
            "NE": 0.45,
            "NO": 0.45,
            "NYG": 0.45,
            "NYJ": 0.45,
            "OAK": 0.45,
            "PHI": 0.45,
            "PIT": 0.45,
            "SEA": 0.45,
            "SF": 0.45,
            "TB": 0.45,
            "TEN": 0.45,
            "WAS": 0.45,
        }
    },
    {
        name: "Andy Dalton",
        avgPocketTime: 1.8,
        completionPercentage: 0.5,
        image: "https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08222018/24822.png",
        currentTeam: "CIN",
        vsDefenseCompletionPercentage: {
            "ATL": 0.45,
            "ARI": 0.45,
            "BAL": 0.45,
            "BUF": 0.45,
            "CAR": 0.45,
            "CHI": 0.45,
            "CIN": 0.45,
            "CLE": 0.45,
            "DAL": 0.45,
            "DEN": 0.45,
            "DET": 0.45,
            "GB": 0.45,
            "HOU": 0.45,
            "IND": 0.45,
            "JAX": 0.45,
            "KC": 0.45,
            "LAC": 0.45,
            "LAR": 0.45,
            "MIA": 0.45,
            "MIN": 0.45,
            "NE": 0.45,
            "NO": 0.45,
            "NYG": 0.45,
            "NYJ": 0.45,
            "OAK": 0.45,
            "PHI": 0.45,
            "PIT": 0.45,
            "SEA": 0.45,
            "SF": 0.45,
            "TB": 0.45,
            "TEN": 0.45,
            "WAS": 0.45,
        }
    },
    {
        name: "Andrew Luck",
        avgPocketTime: 2.2,
        completionPercentage: 0.33,
        image: "https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09212017/25711.png",
        currentTeam: "IND",
        vsDefenseCompletionPercentage: {
            "ATL": 0.45,
            "ARI": 0.45,
            "BAL": 0.45,
            "BUF": 0.45,
            "CAR": 0.45,
            "CHI": 0.45,
            "CIN": 0.45,
            "CLE": 0.45,
            "DAL": 0.45,
            "DEN": 0.45,
            "DET": 0.45,
            "GB": 0.45,
            "HOU": 0.45,
            "IND": 0.45,
            "JAX": 0.45,
            "KC": 0.45,
            "LAC": 0.45,
            "LAR": 0.45,
            "MIA": 0.45,
            "MIN": 0.45,
            "NE": 0.45,
            "NO": 0.45,
            "NYG": 0.45,
            "NYJ": 0.45,
            "OAK": 0.45,
            "PHI": 0.45,
            "PIT": 0.45,
            "SEA": 0.45,
            "SF": 0.45,
            "TB": 0.45,
            "TEN": 0.45,
            "WAS": 0.45,
        }
    },
    
];

db.Quarterback
    .remove({})
    .then(() => db.Quarterback.collection.insertMany(qbSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

//Defense Seed
// const defenseSeed = [
//     {
//         name: "CIN",
//         givenPocketTime: 5
//     },
//     {
//         name: "CHI",
//         givenPocketTime: 5
//     },
//     {
//         name: "IND",
//         givenPocketTime: 5
//     }
// ];

// db.Defense
//     .remove({})
//     .then(() => db.Defense.collection.insertMany(defenseSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

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

//User Seed

// const userSeed = {
//     firstName: "Bruce",
// 	lastName: "Chang",
// 	local: {
// 		username: "Brucimus",
// 		password: "12345"
// 	},
// 	google: {
// 		googleId: "googlestring"
// 	},
// 	photos: [],
// 	players:[]
// };

// db.User
//     .remove({})
//     .then(() => db.User.collection.insertOne(userSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });