const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    dob: String,
    followsIds: [String]
});

module.exports = mongoose.model('User', userSchema);