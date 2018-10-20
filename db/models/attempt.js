const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define attempts schema
const attemptSchema = new Schema({
    qbName: { type: String, unique: false},
    pocketTime: Decimal128,
    competion: Boolean,
    defenderName: { type: String, unique: false},
    hurry: Boolean
})

// Create reference to Attempt & export
const Attempt = mongoose.model('Attempt', attemptSchema)
module.exports = Attempt