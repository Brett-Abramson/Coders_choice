const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/record/:id", (req,res) => {
  Record.findByIdAndDelete(req.params.id)
  .then((deletedRecord) => {
    res.json(deletedRecord)
  })
})





app.listen(PORT, () => {
  console.log("Hello Seattle, I'm listening...");
});
