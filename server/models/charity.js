const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: String,
    description: String,
    ownerId: String
});

module.exports = mongoose.model('Charity', charitySchema);