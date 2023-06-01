const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const checkinSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    userName: String,
    userAvatar: String,
    imgLink: {
        type: String
    }
}, {
    timestamps: true,
});

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
}, {
    timestamps: true,
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
    checkins: [checkinSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Brewery', brewerySchema);