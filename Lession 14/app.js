const express = require('express');
const app = express();
const Routers = require('./Routes/routes')
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}))

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use(Routers)

module.exports = app;