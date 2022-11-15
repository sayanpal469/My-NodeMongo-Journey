const express = require('express');
const route = express.Router()
const path = require('path');
const {getData} = require('../Routes/routes')

route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../Views/index.html'))
})

route.post('/', (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age)
    res.status(202).send(name, age)
})


module.exports = route