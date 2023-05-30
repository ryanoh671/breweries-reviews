const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    brewery: { type: String, required: true },
    location: String
})