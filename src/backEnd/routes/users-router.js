const express = require('express');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();


router.post('/signup', usersControllers.signup);

// router.post('/signin', usersControllers.signin);

router.get('/', usersControllers.getAllUsers);



module.exports = router;