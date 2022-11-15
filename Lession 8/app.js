const express = require("express");
const app = express();
const userRouter = require('./Routes/userRoutes');

app.use('/api/user', userRouter)


// Send status
app.use('/vut', (req, res) => {
    res.status(200).json({
        message: 'I am a vut',
        statusCode: 200
    })
})


// Send html file
app.use('/home', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/index.html')
})

// Send html file
app.use('/register', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/register.html')
})

// Send data in cookie and clear data from cookie
app.use('/cookie', (req, res) => {
    res.cookie('name', 'Sayan');
    res.cookie('title', 'Paul');
    res.clearCookie('title');
    res.end()
})

// Send data in header
app.use('/sendHeader', (req, res) => {
    res.append('id', '132580')
    res.append('id2', '152035')
    res.end()
})
            
app.use('/', (req, res) => {
    res.send("<h1>I am a get request at Home route</h1>")
})

app.use((req, res) => {
    res.send("<h1>404 !!! Not a valid url</h1>");
})


module.exports = app;