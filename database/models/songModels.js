const mongoose = require('mongoose')
const Schema = mongoose.Schema

// JSON schema for Songs
const songsSchema = new Schema
(
    {
        '_id': Number,
        'title': String,
        'genres': [Array],
        'length': Number
    }
);

const Songs = mongoose.model('Songs', songsSchema)
module.exports = Songs;