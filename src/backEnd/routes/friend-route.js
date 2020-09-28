const express = require('express');

const friendControllers = require('../controllers/friend-controller');

const router = express.Router();



router.post('/', friendControllers.createFriend);

router.get('/', friendControllers.getAllFriends);

router.get('/place/:location', friendControllers.getByLocation);

router.get('/:fid', friendControllers.getFriendById);

router.patch('/:uid', friendControllers.updateUser);

router.delete('/:uid', friendControllers.deleteUser);



module.exports = router;