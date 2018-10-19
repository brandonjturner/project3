const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define quarterback schema
const quarterbackSchema = new Schema({
    name: { type: String, unique: true },
    attempt: [{
        type: Schema.Types.ObjectId,
        ref: "Attempt"
      }]
})

// Create reference to Quarterback & export
const Quarterback = mongoose.model('Quarterback', quarterbackSchema)
module.exports = Quarterback