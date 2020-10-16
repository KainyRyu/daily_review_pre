const express = require('./node_modules/express');

const usersController = require('../controllers/users-controller');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/login', usersController.login);

router.post('/signup', usersController.signup);


module.exports = router;