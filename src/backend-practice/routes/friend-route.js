const express = require('./node_modules/express');

const friendControllers = require('../controllers/friends-controller');

const router = express.Router();



router.post('/', friendControllers.createFriend);

router.get('/', friendControllers.getAllFriends);

router.get('/place/:location', friendControllers.getByLocation);

router.get('/user/:uid', friendControllers.getFriendsByUid);

router.get('/:fid', friendControllers.getFriendsById);

router.patch('/:fid', friendControllers.updateFriend);

router.delete('/:fid', friendControllers.deleteFriend);



module.exports = router;