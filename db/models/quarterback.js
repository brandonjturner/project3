const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define quarterback schema
const quarterbackSchema = new Schema({
    name: { type: String, unique: true },
    avgPocketTime: Number,
    completionPercentage: Number,
    vsDefenseCompletionPercentage: {
        "49ers": Number,
        "bears": Number,
        "bengals": Number,
        "bills": Number,
        "broncos": Number,
        "browns": Number,
        "buccaneers": Number,
        "cardinals": Number,
        "chargers": Number,
        "chiefs": Number,
        "colts": Number,
        "cowboys": Number,
        "dolphins": Number,
        "eagles": Number,
        "falcons": Number,
        "giants": Number,
        "jaguars": Number,
        "jets": Number,
        "lions": Number,
        "packers": Number,
        "panthers": Number,
        "patriots": Number,
        "raiders": Number,
        "rams": Number,
        "ravens": Number,
        "redskins": Number,
        "saints": Number,
        "seahawks": Number,
        "steelers": Number,
        "texans": Number,
        "titans": Number,
        "vikings": Number
    },
    attempt: [{
        type: Schema.Types.ObjectId,
        ref: "Attempt"
      }]
})

// Create reference to Quarterback & export
const Quarterback = mongoose.model('Quarterback', quarterbackSchema)
module.exports = Quarterback