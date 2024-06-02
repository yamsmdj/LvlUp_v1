const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
});

module.exports = mongoose.model('Language', languageSchema);