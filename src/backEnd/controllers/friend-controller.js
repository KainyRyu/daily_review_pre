const HttpError = require('../models/http-error');
const Friend = require('../models/friend');
const { v4: uuid4 } = require('uuid');

let DUMMY = [{
    uid: 'u1',
    name: 'Jade',
    location: 'San Jose',
    university: 'SJSU'
}];

const getAllFriends = async (req, res, next) => {

    if (!Friend) {
        const error = new HttpError(
            `We don't have your frined list`, 404
        )
        return next(error);
    }

    res.json({Friend});
}

const getFriendById = async (req, res, next) => {
    const friendId = req.params.fid;

    let friend;
    try {
        friend = await Friend.findById(friendId);
        //findById
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a friend', 500
        );
        return next(error);
    } // catching if we have missing information 


    if (!friend) {
        const error = new HttpError(
            'Could not find a friend for the provided id.', 404
        );
        return next(error);
    } // the request is fine but we just don't have the user.

    res.json({ friend: friend.toObject( {getters: true} )})
    // res.json({ user }); <- the object will be easier to use if we just turn it into a normal javascript object.
    // {getters: true} <- to make the '_id' to a normal string
}

const getByLocation = async (req, res, next) => {
    const paramsLocation = req.params.location;
    
    let location;
    try {
        location = await Friend.find({ location: paramsLocation });
    } catch (err) {
        const error = new HttpError('Something went wrong', 500);
        return next(error);
    }

    if (!location || location.length === 0) {
        next(new HttpError('Could not find the location', 404));
    }
    res.json({ location: location.map(l => l.toObject({ getters: true })) })
}

const createFriend = async (req, res, next) => {
    const { name, sex, age, location } = req.body;
    //cosnt location = req.body.location;
    const createdFriend = new Friend ({
        name, 
        sex, 
        age, 
        location
    })

    try {
        await createdFriend.save();
    } catch(err) {
        const error = new HttpError(
            `Creating friend failed, place try again.`, 500
        );
        return next(error)
    }
    
    res.status(201).json(createdFriend);
}

const updateFriend = async (req, res, next) => {
    const { age, location } = req.body;
    const friendId = req.params.fid;
    
    let friend;
    try {
        friend = await Friend.findById(friendId);
    } catch (err) {
        const error = new HttpError(`Something went wrong`, 500);
        return next(error);
    }

    friend.age = age;
    friend.location = location;

    try {
        await friend.save();
    } catch (err) {
        const error = new HttpError(`Something went wrong, could not update`, 500);
        return next(error);
    }
    
    res.status(200).json({ user: friend.toObject({ getters: true }) });
};

const deleteUser = (req, res, next) => {
    const userId = req.params.uid;
    DUMMY = DUMMY.filter(u => u.uid !== userId);
    res.status(200).json({ message: 'Deleted user' });
};

exports.getAllFriends = getAllFriends; 
exports.getByLocation = getByLocation; 
exports.getFriendById = getFriendById; //I don't execute it. express will. so don't envoke it
exports.createFriend = createFriend; 
exports.updateFriend = updateFriend; 
exports.deleteUser = deleteUser; 