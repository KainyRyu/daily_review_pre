const express = require('express');

const userControllers = require('../controllers/user-controller');

const router = express.Router();

router.get('/uni/:univ', userControllers.getUniversity);

router.get('/', userControllers.displayAll);

router.get('/:uid', userControllers.getUserById);

router.post('/', userControllers.createUser);

router.patch('/:uid', userControllers.updateUser);

router.delete('/:uid', userControllers.deleteUser);



module.exports = router;