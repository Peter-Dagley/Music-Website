const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('script'));

const uri = 'mongodb://localhost:27017/musicdb';
let opts = { useNewUrlParser: true };

// Routes
const songsRouter = require("./routes/songRoutes");

app.use("/songs", songsRouter);

// Connecting to Mongo DB
mongoose.connect
(uri, opts, function (error) {
    if (error) {
        console.log("Errors: " + error)
    } else {
        console.log("connection ready")
    }
});

// Assigning Port
const myserver = app.listen(4000, () =>
    console.log("Server started on", myserver.address().port)
);

module.exports = myserver;

