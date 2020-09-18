const express = require('express');

const userControllers = require('../../../controllers/user-controller');

const router = express.Router();

router.get('/uni/:univ', userControllers.getUniversity);

router.get('/:uid', userControllers.getUserById);

router.post('/', userControllers.createUser);

module.exports = router;