const express = require('express');

const router = express.Router();

const DUMMY = [{
    userData: {
        uid: 'u1',
        name: 'jade'
    },
    priority: {
        important: 'Buying milk'
    }
}]

router.get('/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY.find(u => {
        return u.userData.uid === userId;
    });
    res.json({ user });
});

router.get('/:uid/priority', (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY.find(u => {
        return u.userData.uid === userId;
    });
    const priority = user.priority
    res.json({ priority })
})

module.exports = router;