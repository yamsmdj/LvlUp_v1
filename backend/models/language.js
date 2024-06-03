const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    path_img: { type: String, required: true },
    // courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = mongoose.model('Language', languageSchema);