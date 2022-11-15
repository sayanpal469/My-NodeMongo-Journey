const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./app');

app.use(router)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})