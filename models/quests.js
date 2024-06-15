const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String },
    questType: { type: String, enum: ['Travel', 'Experience', 'Life Goal']},
    imageUrl: { type: String },
    isCompleted: { type: Boolean, default: false }
})


const Quest = mongoose.model('Quest', questSchema)

module.exports = Quest