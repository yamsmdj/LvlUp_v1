const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    // exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

module.exports = mongoose.model('Course', courseSchema);