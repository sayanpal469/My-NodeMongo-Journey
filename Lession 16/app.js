const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRouter');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
require('./Config/db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('View'))


app.get('/', (req, res)=> {
    res.status(200).sendFile(__dirname + '/View/index.html')
})

// User Routes
app.use('/api/users', userRoutes)



app.use((req, res, next)=> {
    res.status(404).sendFile(__dirname + '/View/error.html')
})

app.use((err,req, res,next)=> {
    res.status(500).json({
        message: 'Something broke'
    })
})



module.exports = app;