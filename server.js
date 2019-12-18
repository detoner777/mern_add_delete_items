const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = 8000;

//create the server
app.listen(port, () => {
  console.log("Server is running @ localhost:8000");
});
