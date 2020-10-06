const express = require('express');

const usersControllers = require('../controllers/usersControllers');

const router = express.Router();


router.post('/signup', usersControllers.signup);

router.post('/signin', usersControllers.signin);

router.get('/', usersControllers.getAllUsers);



module.exports = router;