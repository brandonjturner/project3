const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define quarterback schema
const quarterbackSchema = new Schema({
    name: { type: String, unique: true },
    avgPocketTime: Number,
    completionPercentage: Number,
    image: String,
    currentTeam: String,
    vsDefenseCompletionPercentage: {
        "SF": Number,
        "CHI": Number,
        "CIN": Number,
        "BUF": Number,
        "DEN": Number,
        "CLE": Number,
        "TB": Number,
        "ARI": Number,
        "LAC": Number,
        "KC": Number,
        "IND": Number,
        "DAL": Number,
        "MIA": Number,
        "PHI": Number,
        "ATL": Number,
        "NYG": Number,
        "JAX": Number,
        "NYJ": Number,
        "DET": Number,
        "GB": Number,
        "CAR": Number,
        "NE": Number,
        "OAK": Number,
        "LAR": Number,
        "BAL": Number,
        "WAS": Number,
        "NO": Number,
        "SEA": Number,
        "PIT": Number,
        "HOU": Number,
        "TEN": Number,
        "MIN": Number
    },
    attempt: [{
        type: Schema.Types.ObjectId,
        ref: "Attempt"
      }]
})

// Create reference to Quarterback & export
const Quarterback = mongoose.model('Quarterback', quarterbackSchema)
module.exports = Quarterback