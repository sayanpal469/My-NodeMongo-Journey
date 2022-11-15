const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },

    name:{
        type: String,
        require: true  
    },
    age: {
        type: Number,
        require: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('User', userSchema)