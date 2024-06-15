const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questSchema = new Schema ({
    name: { type: String, required: true },
    descritipn: { type: String, required: true},
    type: Boolean
})

const Quest = mongoose.model('Quest', questSchema)

module.exports = Quest