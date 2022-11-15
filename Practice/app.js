const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./Routes/userRouter");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('View'))

app.use('/users', router)

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/View/index.html");
});

// route not found error
app.use((req, res, next) => {
  // res.sendFile(__dirname + "/View/error.html");
  res.status(404).sendFile(__dirname + "/View/error.html");
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke"
  });
});

module.exports = app;