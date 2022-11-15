const express = require('express');
const app = express()
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/Register.html')
})

app.post('/register', (req, res) => {
    const name = req.body.full_Name;
    const age = req.body.age;

    res.send(`Your name is ${name} and your age is ${age}`)
})


module.exports = app;