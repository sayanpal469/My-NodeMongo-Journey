const {
    v4: uuidv4
} = require("uuid");
const User = require('../Model/userModel')


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getSingelUser = async (req, res) => {
    try {
        const singelUser = await User.findOne({
            id: req.params.id
        })
        res.status(205).json(singelUser)
    } catch (err) {
        res.status(500).send(err.message)
    }
    res.status(200).json({
        message: 'Singel'
    })
}

const createUsers = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(202).json(newUser)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({
            id: req.params.id
        })
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save()
        res.status(203).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({
            id: req.params.id
        })
        res.status(202).json({
            message: 'User deleted'
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = {
    getAllUsers,
    getSingelUser,
    createUsers,
    updateUser,
    deleteUser
}