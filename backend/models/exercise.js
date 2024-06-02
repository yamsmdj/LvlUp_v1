const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    
})

module.exports = mongoose.model('Exercise', exerciseSchema)