const express = require('express');

const router = express.Router();

const DUMMY = [{
    uid: 'u1',
    name: 'jade'
}]

router.get('/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY.find(u => {
        return u.uid === userId;
    });
    res.json({ user: user });
});

module.exports = router;