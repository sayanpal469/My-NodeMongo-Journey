const express = require('express');
const app = express();
const PORT = 3000;



// const myMiddleware = (req, res, next) => {
//     console.log(`Hello Middleware`);
//     next()
// }


// app.use(myMiddleware)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})