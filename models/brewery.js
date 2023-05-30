const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String, 
        required: true
    },
    rating: {
        type: Number,
        min: 1, 
        max: 5, 
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    userName: String,
    userAvatar: String
});

const brewerySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    dogFriendly: {
        type: String, 
        enum: ['Yes', 'No'],
        required: true
    },
    ambience: {
        type: String, 
        enum: ['Chill', 'Uplifting', 'Classy'], 
        required: true
    },
    reviews: [reviewSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Brewery', brewerySchema);