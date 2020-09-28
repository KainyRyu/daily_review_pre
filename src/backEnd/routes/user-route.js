const express = require('express');

const usersController = require('../controllers/user-controller');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/login', usersController.login);

router.post('/signup', usersController.signup);


module.exports = router;