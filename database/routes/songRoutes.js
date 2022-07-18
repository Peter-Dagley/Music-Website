const router = require("express").Router();
const Songs = require("../models/songModels");

// Global variable for id
let id = 1;

// View all replies
router.get("/readSongs", (req, res, next) => {
    Songs.find()
      .then((results) => res.send(results))
      .catch((err) => next(err));
  });

module.exports = router;