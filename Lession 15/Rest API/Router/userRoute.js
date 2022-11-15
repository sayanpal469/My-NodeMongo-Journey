const route = require('express').Router();
const { getUser, createUser, updateUser } = require('../Controller/userController');


route.get('/', getUser)
route.post('/', createUser)
route.put('/:id', updateUser)

module.exports = route;