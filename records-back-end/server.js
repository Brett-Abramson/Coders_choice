const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Records = require("./models/records");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/record/:id", (req,res) => {
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

app.post("records", (req, res) => {
  Records.create(req.body).then((createdRecord) => {
    res.json(createdRecord);
  });
});

app.listen(PORT, () => {
  console.log("Hello Seattle, I'm listening...");
});
mongoose.connect("mongodb:localhost:27017/recordcrud");
mongoose.connection.once("open", () => {
  console.log("connection with god established...");
});
