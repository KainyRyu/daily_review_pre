const express = require('express');

const usersControllers = require('../controllers/usersControllers');

const router = express.Router();


router.post('/', usersControllers.createUser);

router.get('/', usersControllers.getAllUsers);



module.exports = router;