const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const Routes = require('./Router/userRoute');
const route = require('./Router/userRoute');

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/users', route)

app.get('/', (req, res) => {
    res.sendFile(__dirname + './View/index.html')
})

app.use(Routes)

module.exports = app;