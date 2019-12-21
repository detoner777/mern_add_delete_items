const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const item = require("./routes/item");
const DB = require("./database/dbConection");
const bodyParser = require("body-parser");
const cors = require("cors");

//user body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//user CORS
app.use(cors());

//database connection
mongoose
  .connect(DB.connection, { useNewUrlParser: true })
  .then(connection => {
    console.log("DB connected");
  })
  .catch(error => {
    console.log(database);
    console.log({
      error: {
        name: error.name,
        message: error.message,
        errorCode: error.code,
        codeName: error.codeName
      }
    });
  });

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 8000;

//create the server
app.listen(port, () => {
  console.log("Server is running @ localhost:8000");
});
