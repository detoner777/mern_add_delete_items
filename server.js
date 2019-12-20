const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello World!"));

const port = 8000;

//create the server
app.listen(port, () => {
  console.log("Server is running @ localhost:8000");
});
