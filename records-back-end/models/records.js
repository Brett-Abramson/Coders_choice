const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  recordName: String,
  artistName: String,
  releaseYear: Number,
  tracks: [
    {
      trackName: String,
      trackLength: Number,
    },
  ],
  recordArtwork: String,
});

const Records = mongoose.model("Records", recordSchema);
module.exports = Records;
