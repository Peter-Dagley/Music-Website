const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songsSchema = new Schema
(
    {
        '_id': Number,
        'title': String,
        'genres': [Array],
        'length': Double
    }
);

const Songs = mongoose.model('Songs', songsSchema)
module.exports = Songs;