const express = require('express');
const app = express();



app.get('/info/:id([0-9]){3}', (req, res) => {
    const id = req.params.id;
    res.send(`Here is Your ID: ${id}`)
})


app.get('*', (req, res) => {
    res.status(404).send({
        message: 'Not a valit route'
    })
})

app.listen(3000, () =>{
    console.log('Server is running')
})