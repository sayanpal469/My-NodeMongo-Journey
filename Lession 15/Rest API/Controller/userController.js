const users = require('../Module/user')
const { v4: uuidv4 } = require("uuid");


const getUser = (req, res) => {
    res.status(200).json({users})    
}

const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        userName: req.body.username,
        email: req.body.email
    }
    users.push(newUser)
    res.status(201).json(users)
}

const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter(user => user.id == userId).map(selectedUser => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json(users)
}

module.exports = { getUser, createUser, updateUser }