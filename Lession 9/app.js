const express = require('express');
const route = express.Router();

// Query parameter example
route.get('/', (req, res) => {
    const name = req.query.name;
    const id = req.query.id;
    res.send(`Name is ${name} and Id is ${id}`)
})


// Router parameter example
route.get('/userName/:name/userId/:id', (req, res) => {
    const name = req.params.name;
    const id = req.params.id;
    res.send(`Name is ${name} and Id is ${id}`)
})


module.exports = route;