const { getUser, createUser, updateUser, deleteUser } = require('../Controller/userControll');

const router = require('express').Router();

router.get('/', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;
