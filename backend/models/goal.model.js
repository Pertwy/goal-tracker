const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    endDate:{type: Date, required: true},
    milestones : [{title : String}]
},{
    timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal