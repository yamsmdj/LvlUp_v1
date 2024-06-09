const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: String, enum: ['ADMIN', 'USER'], default: ['USER'], required: true  }

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);