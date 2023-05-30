const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Brewery', brewerySchema);