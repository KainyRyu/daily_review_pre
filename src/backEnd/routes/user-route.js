const express = require('express');

const HttpError = require('../../../models/http-error');

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

    if (!user) {
        throw new HttpError('Could not find a user for the provided id.', 404);
    }

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