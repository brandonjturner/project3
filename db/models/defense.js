const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define defense schema
const defenseSchema = new Schema({
    name: { type: String, unique: true },
    givenPocketTime: Number,
    attempt: [{
        type: Schema.Types.ObjectId,
        ref: "Attempt"
      }]
})

// Create reference to Defense & export
const Defense = mongoose.model('Defense', defenseSchema)
module.exports = Defense