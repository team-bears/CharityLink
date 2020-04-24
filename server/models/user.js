const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    uid: String,

    first_name: String,
    last_name: String,
    profile_picture: String,

    email: String,
    password: String,

    dob: String,
    gender: String,

    followsIds: [String],
    followingIds: [String],

});

module.exports = mongoose.model('User', userSchema);