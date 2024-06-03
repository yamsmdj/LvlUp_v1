const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    
    title: { type: String, required: true },
    description: { type: String, required: true },
    solution: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
    
})

module.exports = mongoose.model('Exercise', exerciseSchema)