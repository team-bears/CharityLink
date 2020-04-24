const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    uid: String,
    name: String,
    profile_picture: String,
    email: String,
    password: String,

    phone: String,

    followersId: [String],
    followsId: [String],

});

module.exports = mongoose.model('Charity', charitySchema);