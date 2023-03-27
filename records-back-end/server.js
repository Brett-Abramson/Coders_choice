const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Records = require("./models/records");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.delete("/record/:id", (req,res) => {
  Record.findByIdAndDelete(req.params.id)
  .then((deletedRecord) => {
    res.json(deletedRecord)
  })
})


app.get("/records", (req, res) => {
  Records.find({})
    .sort({ name: 1 })
    .then((foundRecords) => {
      res.json(foundRecords);
    });
});

app.put("/records/:id", (req,res) => {
  Records.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedRecord)=>res.json(updatedRecord))
})

app.listen(PORT, () => {
  console.log("Hello Seattle, I'm listening...");
});
