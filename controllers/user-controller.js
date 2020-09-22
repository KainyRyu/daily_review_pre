const HttpError = require('../models/http-error');
const { v4: uuid4 } = require('uuid');

const DUMMY = [{
    userData: {
        uid: 'u1',
        name: 'jade'
    },
    university: 'SJSU'
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

const getUniversity = (req, res, next) => {
    const univ = req.params.univ;
    const university = DUMMY.find(u => {
        return u.university === univ;
    });
    // const university = user.university;

    if (!university) {
        throw new HttpError('Could not find the provideddata', 404);
    }

    res.json({ university })
}

const createUser = (req, res, next) => {
    const { userData, university } = req.body;
    //cosnt userData = req.body.title;
    const createdUser = { 
        id: uuid4(),
        userData, 
        university 
    };

    DUMMY.push({user: createdUser});
    
    res.status(201).json(createdUser);
}

const updateUser = (req, res, next) => {
    const { userData, university } = req.body;
    const userId = req.params.uid;

    const updatedUser = { ...DUMMY.find(u => u.id === userId) }; //update immutable way
    const userIndex = DUMMY.findIndex(u => u.id === userId)
    updatedUser.userData = userData;
    updatedUser.university = university;

    DUMMY[userIndex] = updatedUser;

    res.status(200).json({user: updatedUser});
};

// const deleteUser = (req, res, next) => {

// };

exports.getUserById = getUserById; //I don't execute it. express will. so don't envoke it
exports.getUniversity = getUniversity; 
exports.createUser = createUser; 
exports.updateUser = updateUser; 
// exports.deleteUSer = deleteUser; 