const mongoose = require('mongoose');
const config = require('./Config');

const dbUrl = config.db.url
mongoose
    .connect(dbUrl)
    .then(() => {
        console.log('Mongodb atlas connected')
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })