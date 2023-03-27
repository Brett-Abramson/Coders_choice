const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Records = require("./models/records");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/records", (req, res) => {
  Records.find({})
    .sort({ name: 1 })
    .then((foundRecords) => {
      res.json(foundRecords);
    });
});

app.listen(PORT, () => {
  console.log("Hello Seattle, I'm listening...");
});
