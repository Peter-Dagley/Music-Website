const mongoose = require('mongoose')
const Schema = mongoose.Schema

// JSON schema for Songs
const songsSchema = new Schema
(
    {
        "id": Number,
        "songTitle": String,
        "albumTitle": String,
        "albumArt": String,
        "artist": String,
        "genre": String,
        "length": Number	
    }
);

const Songs = mongoose.model('Songs', songsSchema)
module.exports = Songs;