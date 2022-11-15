const { getAllUsers, getSingelUser, createUsers, updateUser, deleteUser } = require('../Controller/userControll');

const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:id', getSingelUser);
router.post('/', createUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

//uDGqzlQYfDyouswi


module.exports = router;