const mongoose = require("mongoose");
const db = require("../db/models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Users"
);

const attemptSeed = [
    /* 1 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.3,
        "competion" : 1,
        "defenderName" : "Jaguars",
        "hurry" : 1
    },

    /* 2 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.3,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 3 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.797,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 4 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 0.495,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 5 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 3.174,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 6 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.984,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 7 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.491,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 8 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.251,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 9 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.738,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 10 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 3.683,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 11 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.302,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 12 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 3.525,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 13 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.18,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 14 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.068,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 15 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.923,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 16 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.158,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 17 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.071,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 18 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.637,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 19 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.508,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 20 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.957,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 21 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.597,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 22 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 23 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.975,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 24 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.837,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 25 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.933,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 26 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.339,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "OAK"
    },

    /* 27 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.47,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "OAK"
    },

    /* 28 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.222,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 29 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.427,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 30 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 0.518,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 31 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.541,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 32 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.29,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 33 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.837,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "OAK"
    },

    /* 34 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.388,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 35 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.267,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 36 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 3.071,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 37 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.837,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 38 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.957,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 39 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.614,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 40 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.867,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 41 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.627,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 42 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.836,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 43 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.535,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 44 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.942,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 45 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.811,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 46 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.486,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "IND"
    },

    /* 47 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.38,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 48 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.875,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 49 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 50 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.268,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 51 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.611,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 52 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.265,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 53 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.519,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 54 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 2.637,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 55 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.699,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 56 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 1.284,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 57 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.484,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 58 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 4.659,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 59 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 3.053,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 60 */
    {
        "qbName" : "Andrew Luck",
        "pocketTime" : 1.67,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "OAK"
    },

    /* 61 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 2.405,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "IND"
    },

    /* 62 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : 3.317,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "IND"
    },

    /* 63 */
    {
        "qbName" : "Derek Carr",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 64 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 0.763,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 65 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.275,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "DEN"
    },

    /* 66 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.698,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "KC"
    },

    /* 67 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.269,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 68 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.604,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 69 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 0.797,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 70 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.756,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 71 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 72 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 73 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.514,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 74 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.796,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 75 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.549,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 76 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.515,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 77 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.125,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 78 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 79 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.642,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 80 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.827,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 81 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.48,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 82 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.341,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 83 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.174,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 84 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.813,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 85 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.914,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 86 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 4.329,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 87 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.39,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 88 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.34,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 89 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.922,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 90 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.444,
        "competion" : 0,
        "hurry" : 1
    },

    /* 91 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 92 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.506,
        "competion" : 0,
        "hurry" : 0
    },

    /* 93 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.371,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 94 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.133,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 95 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.758,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 96 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.612,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 97 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.619,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 98 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 99 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.365,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 100 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 101 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.894,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 102 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.076,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 103 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.181,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 104 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.348,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 105 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.78,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 106 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.458,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 107 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.427,
        "competion" : 0,
        "hurry" : 0
    },

    /* 108 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.493,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 109 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.334,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "DEN"
    },

    /* 110 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.821,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 111 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.204,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 112 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 0.986,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 113 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.121,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 114 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.171,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 115 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.349,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 116 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.746,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 117 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.813,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 118 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.569,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 119 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.242,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 120 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 4.052,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 121 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.153,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 122 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.071,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 123 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.412,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 124 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.862,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 125 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.134,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 126 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.661,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 127 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 2.31,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "DEN"
    },

    /* 128 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.945,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 129 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.146,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 130 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.627,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 131 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 3.238,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "DEN"
    },

    /* 132 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.13,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "KC"
    },

    /* 133 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.42,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 134 */
    {
        "qbName" : "Patrick Mahomes II",
        "pocketTime" : 1.923,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DEN"
    },

    /* 135 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.444,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 136 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.486,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 137 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 3.064,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "KC"
    },

    /* 138 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.677,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "KC"
    },

    /* 139 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.271,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 140 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.59,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 141 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.044,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 142 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.077,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 143 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 2.972,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "KC"
    },

    /* 144 */
    {
        "qbName" : "Case Keenum",
        "pocketTime" : 1.445,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "KC"
    },

    /* 145 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 0.773,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 146 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.83,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 147 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.997,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "LA"
    }
,
    /* 148 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.141,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 149 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.516,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 150 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.38,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 151 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.823,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 152 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.614,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 153 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.213,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 154 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.029,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 155 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.564,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 156 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.134,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 157 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.333,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 158 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.687,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 159 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.637,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 160 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.303,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 161 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.466,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 162 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 4.005,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 163 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.693,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 164 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.429,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 165 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.908,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 166 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 0.748,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 167 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.21,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 168 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.498,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 169 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.682,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 170 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.478,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 171 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.349,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 172 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 1.804,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 173 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 4.958,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 174 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.597,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 175 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.598,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 176 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.454,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 177 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.271,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 178 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.359,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 179 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.166,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 180 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.743,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 181 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.019,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 182 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.997,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 183 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.636,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 184 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.996,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 185 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.119,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 186 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.551,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 187 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.526,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 188 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.078,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 189 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.127,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 190 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.179,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 191 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.774,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 192 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 193 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.324,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 194 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.542,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 195 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.543,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 196 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.638,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 197 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.722,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 198 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.99,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 199 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.45,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 200 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.683,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 201 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.788,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 202 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.058,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 203 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.286,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 204 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.613,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 205 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 4.3,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 206 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 1.7,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 207 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.839,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "GB"
    },

    /* 208 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.142,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 209 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.142,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 210 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.606,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 211 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.947,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 212 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.511,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 213 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 3.83,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 214 */
    {
        "qbName" : "Jared Goff",
        "pocketTime" : 2.315,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "GB"
    },

    /* 215 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.006,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 216 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 3.023,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 217 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.274,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "LA"
    },

    /* 218 */
    {
        "qbName" : "Aaron Rodgers",
        "pocketTime" : 2.142,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "LA"
    },

    /* 219 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.749,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 220 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.117,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 221 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.565,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 222 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.084,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 223 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.029,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 224 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.645,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 225 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.876,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 226 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 4.878,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 227 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.524,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 228 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 3.278,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 229 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.998,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 230 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 1.672,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 231 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.63,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 232 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 0.708,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 233 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 3.061,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 234 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.197,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 235 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.612,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 236 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.988,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 237 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.836,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 238 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.508,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 239 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.527,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 240 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 3.829,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 241 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.814,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 242 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.172,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 243 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.5,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 244 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.254,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 245 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.453,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 246 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.589,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 247 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.884,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 248 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.845,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 249 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.901,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 250 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.446,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 251 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.965,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 252 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.212,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 253 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0
    },

    /* 254 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 3.413,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 255 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.358,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 256 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 3.254,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 257 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 3.004,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 258 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 259 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 1.454,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 260 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.076,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 261 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.717,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 262 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 263 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 1.691,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 264 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.357,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 265 */
    {
        "qbName" : "Danny Amendola",
        "pocketTime" : 0.99,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 266 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 3.59,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 267 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.782,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 268 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 3.094,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "HOU"
    },

    /* 269 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 4.523,
        "competion" : 1,
        "hurry" : 0
    },

    /* 270 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 3.415,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 271 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 4.095,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 272 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 273 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.468,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 274 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.315,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "MIA"
    },

    /* 275 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 276 */
    {
        "qbName" : "Deshaun Watson",
        "pocketTime" : 2.059,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIA"
    },

    /* 277 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.204,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 278 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.045,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 279 */
    {
        "qbName" : "Brock Osweiler",
        "pocketTime" : 2.815,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "HOU"
    },

    /* 280 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.915,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 281 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.621,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 282 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 4.229,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 283 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.038,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 284 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 1.75,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 285 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 4.053,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 286 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.037,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 287 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.382,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 288 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.821,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 289 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.342,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 290 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.46,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 291 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.79,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 292 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.679,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 293 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.83,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 294 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.044,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 295 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.357,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 296 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.719,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 297 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.163,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 298 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.807,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 299 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.582,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 300 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 1.573,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 301 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 4.347,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 302 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.166,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 303 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.973,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 304 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.319,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 305 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.366,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 306 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.246,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 307 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 1.853,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 308 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 0.807,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 309 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.774,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 310 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 311 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.847,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 312 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.948,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 313 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.55,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 314 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.867,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 315 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.148,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 316 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.862,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 317 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.264,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 318 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.943,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 319 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.103,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 320 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.854,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 321 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.894,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 322 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.308,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 323 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.988,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 324 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.842,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 325 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 326 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.493,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 327 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.966,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 328 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.831,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 329 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.608,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 330 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.405,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 331 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 3.86,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NE"
    },

    /* 332 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 1.597,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 333 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.157,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 334 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.799,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "BUF"
    },

    /* 335 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 336 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 2.773,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 337 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.196,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 338 */
    {
        "qbName" : "Tom Brady",
        "pocketTime" : 3.198,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BUF"
    },

    /* 339 */
    {
        "qbName" : "Derek Anderson",
        "pocketTime" : 2.767,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "NE"
    },

    /* 340 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.507,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 341 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.125,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 342 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.662,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 343 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.24,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 344 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.324,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 345 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.741,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 346 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.421,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 347 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 0.754,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 348 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.037,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "CLE"
    },

    /* 349 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 0.964,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 350 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.1,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 351 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.645,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 352 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.767,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 353 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.732,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 354 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.238,
        "competion" : 0,
        "hurry" : 0
    },

    /* 355 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.882,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 356 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.727,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 357 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.765,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 358 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.749,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 359 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.501,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 360 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.708,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 361 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.413,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 362 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.83,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CLE"
    },

    /* 363 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.493,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 364 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.534,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 365 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.286,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CLE"
    },

    /* 366 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.852,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 367 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 3.795,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 368 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.198,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 369 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.116,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 370 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.834,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 371 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.655,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 372 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.287,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 373 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.71,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 374 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 0.994,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 375 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 376 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.846,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 377 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.26,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 378 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 0.629,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 379 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 4.707,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 380 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.476,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 381 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.573,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 382 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.821,
        "competion" : 0,
        "hurry" : 0
    },

    /* 383 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.396,
        "competion" : 0,
        "hurry" : 0
    },

    /* 384 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.403,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 385 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 3.159,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 386 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 3.171,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 387 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 3.463,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 388 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.821,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 389 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.378,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 390 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 391 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 392 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.182,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 393 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : null,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 394 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 395 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.198,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 396 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.3,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 397 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 3.163,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 398 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.849,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 399 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.806,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "PIT"
    },

    /* 400 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.118,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 401 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.708,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 402 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.843,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 403 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.972,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 404 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.987,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 405 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.467,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 406 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.894,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 407 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 2.119,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 408 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 3.913,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 409 */
    {
        "qbName" : "Ben Roethlisberger",
        "pocketTime" : 1.765,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CLE"
    },

    /* 410 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.742,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 411 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.856,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 412 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.598,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 413 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.67,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 414 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.868,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 415 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 3.199,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 416 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 2.389,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 417 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.935,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 418 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 1.918,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 419 */
    {
        "qbName" : "Baker Mayfield",
        "pocketTime" : 4.263,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PIT"
    },

    /* 420 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.523,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 421 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 3.479,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 422 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.24,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 423 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.261,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 424 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 2.468,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 425 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 1.877,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 426 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.836,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 427 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 2.083,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 428 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.796,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 429 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.676,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 430 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.023,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 431 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.43,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 432 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.163,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 433 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 1.276,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 434 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.94,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "CIN"
    },

    /* 435 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : null,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 436 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.923,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 437 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 1.541,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 438 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.748,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 439 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.221,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 440 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 1.167,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 441 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 2.03,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 442 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.66,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 443 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 6.606,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "TB"
    },

    /* 444 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 1.699,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 445 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 2.056,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 446 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 1.725,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 447 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.099,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 448 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.55,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 449 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.953,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 450 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 4.67,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "CIN"
    },

    /* 451 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 452 */
    {
        "qbName" : "Jameis Winston",
        "pocketTime" : 3.126,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CIN"
    },

    /* 453 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 3.413,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 454 */
    {
        "qbName" : "Andy Dalton",
        "pocketTime" : 2.262,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "TB"
    },

    /* 455 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.228,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 456 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.078,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 457 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.656,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 458 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 4.215,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 459 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.319,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 460 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.278,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 461 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.526,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 462 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.274,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 463 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.222,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 464 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.038,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 465 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.182,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 466 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.348,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 467 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.703,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 468 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.27,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 469 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.122,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 470 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.89,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 471 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.502,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 472 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.031,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 473 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.876,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 474 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.917,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 475 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.415,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 476 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.709,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 477 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.084,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 478 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.517,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 479 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.86,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 480 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.643,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 481 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.58,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 482 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.702,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 483 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.366,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 484 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.718,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 485 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.835,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 486 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.193,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 487 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.188,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 488 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.307,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "PHI"
    },

    /* 489 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 4.304,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "JAC"
    },

    /* 490 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.532,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 491 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.59,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 492 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.182,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 493 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 4.187,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 494 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.636,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 495 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.165,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 496 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.575,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 497 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.411,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 498 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.672,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 499 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.486,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 500 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.158,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 501 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.359,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 502 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.83,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 503 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.534,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 504 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.413,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 505 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.836,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 506 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.892,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 507 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.057,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 508 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.903,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 509 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 510 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.846,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 511 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.55,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 512 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.349,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 513 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.878,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 514 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.773,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 515 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.092,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 516 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.903,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 517 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 2.253,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 518 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.694,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 519 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.087,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 520 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.206,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 521 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.013,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 522 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.892,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 523 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.941,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 524 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.021,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 525 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.041,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 526 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 1.243,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 527 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.26,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "PHI"
    },

    /* 528 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.383,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 529 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 1.574,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 530 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.43,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 531 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.406,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 532 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.318,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 533 */
    {
        "qbName" : "Blake Bortles",
        "pocketTime" : 2.534,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "PHI"
    },

    /* 534 */
    {
        "qbName" : "Carson Wentz",
        "pocketTime" : 3.655,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "JAC"
    },

    /* 535 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.669,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "ARI"
    },

    /* 536 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.163,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 537 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.238,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 538 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.667,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 539 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.078,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 540 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : null,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 541 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.318,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "ARI"
    },

    /* 542 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.405,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 543 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.818,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 544 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 3.372,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 545 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.38,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 546 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.261,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "ARI"
    },

    /* 547 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.81,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 548 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.228,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 549 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 550 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.331,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 551 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 4.082,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "SF"
    },

    /* 552 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.532,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 553 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.382,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 554 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.723,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 555 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.852,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "SF"
    },

    /* 556 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.333,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 557 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.711,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 558 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.483,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 559 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.356,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 560 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.591,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 561 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.337,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 562 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.69,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 563 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.334,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 564 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.017,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 565 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.156,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 566 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.133,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 567 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.437,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 568 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.923,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "SF"
    },

    /* 569 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.542,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 570 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.045,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 571 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.136,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 572 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.486,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 573 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.141,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 574 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.581,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 575 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.501,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 576 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.806,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 577 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 3.071,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 578 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.323,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 579 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.055,
        "competion" : 0,
        "hurry" : 0
    },

    /* 580 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.355,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 581 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.053,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 582 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.191,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 583 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.169,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 584 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.494,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 585 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.717,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 586 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.829,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 587 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.962,
        "competion" : 0,
        "hurry" : 0
    },

    /* 588 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.205,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 589 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.991,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 590 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.534,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 591 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.202,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 592 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 4.027,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "ARI"
    },

    /* 593 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.193,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 594 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.278,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 595 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.89,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 596 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.91,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 597 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.295,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 598 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.78,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 599 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.589,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 600 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.78,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 601 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.365,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 602 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.317,
        "competion" : 0,
        "hurry" : 0
    },

    /* 603 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 2.436,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 604 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 1.758,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 605 */
    {
        "qbName" : "Josh Rosen",
        "pocketTime" : 3.141,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SF"
    },

    /* 606 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.58,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 607 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.823,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 608 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 2.916,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 609 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 1.575,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 610 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 5.527,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "ARI"
    },

    /* 611 */
    {
        "qbName" : "C.J. Beathard",
        "pocketTime" : 5.128,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "ARI"
    },

    /* 612 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.908,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 613 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.573,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 614 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.718,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 615 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.005,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 616 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.652,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 617 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.793,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 618 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 0.933,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 619 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.956,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 620 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 3.045,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BAL"
    },

    /* 621 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.861,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 622 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 0.73,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 623 */
    {
        "qbName" : "Lamar Jackson",
        "pocketTime" : 2.508,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 624 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.421,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 625 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.085,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 626 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.789,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 627 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.141,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 628 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.339,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 629 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.773,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 630 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.083,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 631 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.204,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 632 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.277,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 633 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.259,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 634 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.253,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 635 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.24,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 636 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.102,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 637 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.726,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 638 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.466,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 639 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.466,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 640 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.524,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 641 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.31,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 642 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 643 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.043,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 644 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.947,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 645 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.512,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 646 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.989,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 647 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.106,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 648 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 3.404,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 649 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 650 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.843,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 651 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 652 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.421,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 653 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.957,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 654 */
    {
        "qbName" : "Taylor Heinicke",
        "pocketTime" : 1.153,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 655 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.798,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 656 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.412,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 657 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.566,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 658 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.998,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 659 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.169,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 660 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.829,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 661 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 3.406,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 662 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.389,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "CAR"
    },

    /* 663 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.196,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 664 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 4.348,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "BAL"
    },

    /* 665 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.701,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 666 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.149,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 667 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.915,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 668 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.123,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 669 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.97,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 670 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.453,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 671 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.747,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 672 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.981,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 673 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.581,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "BAL"
    },

    /* 674 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 1.825,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 675 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.707,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 676 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.571,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 677 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.005,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 678 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.053,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 679 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.581,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 680 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.853,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 681 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.67,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CAR"
    },

    /* 682 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 3.554,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "BAL"
    },

    /* 683 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 2.085,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 684 */
    {
        "qbName" : "Lamar Jackson",
        "pocketTime" : 2.899,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 685 */
    {
        "qbName" : "Cam Newton",
        "pocketTime" : 1.206,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "BAL"
    },

    /* 686 */
    {
        "qbName" : "Lamar Jackson",
        "pocketTime" : 2.574,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 687 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.54,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 688 */
    {
        "qbName" : "Joe Flacco",
        "pocketTime" : 2.38,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CAR"
    },

    /* 689 */
    {
        "qbName" : "Lamar Jackson",
        "pocketTime" : 1.7,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 690 */
    {
        "qbName" : "Lamar Jackson",
        "pocketTime" : 2.957,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CAR"
    },

    /* 691 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 1.444,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 692 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.501,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 693 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.396,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 694 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 695 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.62,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 696 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.146,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 697 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.598,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 698 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 1.502,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 699 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.132,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 700 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.445,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 701 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.55,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 702 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.526,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 703 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.215,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 704 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.359,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 705 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.595,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 706 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.515,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 707 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.286,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 708 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.508,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 709 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.334,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 710 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 4.135,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "NYG"
    },

    /* 711 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.998,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 712 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.412,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 713 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.31,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 714 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.215,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 715 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 716 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.651,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 717 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.067,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 718 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.107,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 719 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.34,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 720 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.004,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 721 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.749,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 722 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.156,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 723 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.886,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 724 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.829,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 725 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.917,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 726 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 4.566,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 727 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 1.918,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 728 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.467,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 729 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 1.981,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 730 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.992,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 731 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.31,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 732 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.051,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 733 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.862,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 734 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.275,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 735 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.037,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 736 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.759,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 737 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.524,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 738 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.485,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 739 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.454,
        "competion" : 0,
        "hurry" : 0
    },

    /* 740 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.761,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 741 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 1.87,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 742 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.947,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 743 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.806,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 744 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.436,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 745 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.582,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 746 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.797,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 747 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.91,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 748 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.274,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 749 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.035,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 750 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.667,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "WAS"
    },

    /* 751 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.374,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 752 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.293,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 753 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.626,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 754 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.661,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 755 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.028,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 756 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 2.589,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 757 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.014,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 758 */
    {
        "qbName" : "Alex Smith",
        "pocketTime" : 3.796,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYG"
    },

    /* 759 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 760 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.373,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 761 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 762 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.645,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 763 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.361,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 764 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.457,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 765 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.325,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 766 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.63,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 767 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.029,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 768 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.987,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 769 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.436,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 770 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 5.355,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 771 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.868,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 772 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.31,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 773 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 3.428,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 774 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.604,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 775 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.453,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 776 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.876,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "WAS"
    },

    /* 777 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.835,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 778 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 2.559,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 779 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : 1.684,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "WAS"
    },

    /* 780 */
    {
        "qbName" : "Eli Manning",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 781 */
    {
        "qbName" : "Drew Brees",
        "pocketTime" : 1.94,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "MIN"
    },

    /* 782 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.166,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 783 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.447,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 784 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.403,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "NYJ"
    },

    /* 785 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 3.362,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 786 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.039,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 787 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.332,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 788 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.812,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 789 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.579,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 790 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.732,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 791 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.654,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 792 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.972,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 793 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.854,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 794 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.493,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 795 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.941,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 796 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.829,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 797 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 0.77,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 798 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.199,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "CHI"
    },

    /* 799 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.547,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 800 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.612,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 801 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.315,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 802 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.542,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 803 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.269,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 804 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.949,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 805 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.532,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 806 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.453,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 807 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 808 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.221,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 809 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.655,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 810 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.751,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 811 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.316,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 812 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.019,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 813 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.703,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "NYJ"
    },

    /* 814 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.685,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 815 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.635,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CHI"
    },

    /* 816 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 3.122,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 817 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 0.987,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 818 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.773,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 819 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.06,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 820 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.309,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 821 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.582,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 822 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.925,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 823 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.401,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 824 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.316,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 825 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.126,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 826 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.022,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 827 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.55,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 828 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.356,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 829 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.101,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 830 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.877,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 831 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.459,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 832 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.894,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 833 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.856,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 834 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.187,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CHI"
    },

    /* 835 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.477,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 836 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.482,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 837 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.466,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CHI"
    },

    /* 838 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 2.613,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 839 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.275,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "CHI"
    },

    /* 840 */
    {
        "qbName" : "Mitchell Trubisky",
        "pocketTime" : 1.204,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "NYJ"
    },

    /* 841 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 1.137,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 842 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 3.477,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 843 */
    {
        "qbName" : "Sam Darnold",
        "pocketTime" : 2.304,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "CHI"
    },

    /* 844 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.59,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 845 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.757,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "DET"
    },

    /* 846 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.002,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 847 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.435,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 848 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.198,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 849 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.156,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 850 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.213,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 851 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.806,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 852 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.365,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 853 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.853,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 854 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.47,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 855 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 3.02,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 856 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.934,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 857 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.515,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 858 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.548,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 859 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.965,
        "competion" : 1,
        "hurry" : 1,
        "defenderName" : "SEA"
    },

    /* 860 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : null,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 861 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.98,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 862 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.726,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 863 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.316,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 864 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.375,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 865 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 3.628,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 866 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.621,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "DET"
    },

    /* 867 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.32,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 868 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.293,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 869 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.607,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 870 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.968,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 871 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.658,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 872 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.345,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 873 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.892,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 874 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.778,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 875 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 2.486,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 876 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.699,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 877 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 3.965,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "DET"
    },

    /* 878 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.725,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 879 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.079,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 880 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 4.355,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "SEA"
    },

    /* 881 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.959,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 882 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.77,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 883 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.795,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 884 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 1.867,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 885 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : 3.31,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 886 */
    {
        "qbName" : "Russell Wilson",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 887 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.335,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "SEA"
    },

    /* 888 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.726,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 889 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.118,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 890 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.727,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 891 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.725,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 892 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.116,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 893 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 894 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.965,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 895 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.846,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 896 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.82,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 897 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.646,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 898 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.18,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 899 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.815,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 900 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.967,
        "competion" : null,
        "hurry" : 1,
        "defenderName" : "SEA"
    },

    /* 901 */
    {

        "qbName" : "Russell Wilson",
        "pocketTime" : 3.605,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "DET"
    },

    /* 902 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.035,
        "competion" : 0,
        "hurry" : 1,
        "defenderName" : "SEA"
    },

    /* 903 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.298,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 904 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.733,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 905 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.147,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 906 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : null,
        "competion" : 0,
        "hurry" : 0
    },

    /* 907 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 2.579,
        "competion" : 0,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 908 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 3.183,
        "competion" : null,
        "hurry" : 0,
        "defenderName" : "SEA"
    },

    /* 909 */
    {
        "qbName" : "Matthew Stafford",
        "pocketTime" : 1.718,
        "competion" : 1,
        "hurry" : 0,
        "defenderName" : "SEA"
    }
]

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