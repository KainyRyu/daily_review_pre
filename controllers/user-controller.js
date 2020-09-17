const HttpError = require('../models/http-error');

const DUMMY = [{
    userData: {
        uid: 'u1',
        name: 'jade'
    },
    priority: {
        important: 'Buying milk'
    }
}]


const getUserById = (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY.find(u => {
        return u.userData.uid === userId;
    });

    if (!user) {
        throw new HttpError('Could not find a user for the provided id.', 404);
    }

    res.json({ user });
}

const getPrioirity = (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY.find(u => {
        return u.userData.uid === userId;
    });
    const priority = user.priority
    res.json({ priority })
}



exports.getUserById = getUserById; //I don't execute it. express will. so don't envoke it
exports.getPrioirity = getPrioirity; //I don't execute it. express will. so don't envoke it