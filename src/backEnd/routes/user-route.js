const express = require('express');

const userControllers = require('../../../controllers/user-controller');

const router = express.Router();

router.get('/:uid', userControllers.getUserById);

router.get('/:uid/priority', userControllers.getPrioirity);

router.post('/')

module.exports = router;