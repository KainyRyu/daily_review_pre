const { v4: uuid4 } = require('uuid');
const mongoose = require('mongoose');
const db = mongoose.connection;


const HttpError = require('../models/http-error');
const Friend = require('../models/friend');
const User = require('../models/user');

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
    const { name, sex, age, location, friendOf } = req.body;
    const createdFriend = new Friend ({
        name, sex, age, location, friendOf
    });

    let user;
    try {
        user = await User.findById(friendOf);
    } catch(err) {
        const error = new HttpError(`Adding friend failed`, 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError(`Could not find user for provided id`, 404);
        return next(error);
    }
    
    console.log(user);
    console.log(createdFriend);

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdFriend.save({ session: sess });
        user.friends.push(createdFriend);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch(err) {
        const error = new HttpError(
            `Creating friend failed, please try again.`, 500
        );
        return next(error);
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

const deleteFriend = async (req, res, next) => {
    const friendId = req.params.fid;

    let friend;
    try {
        friend = await Friend.findById(friendId).populate('friendOf');
    } catch (err) {
        const error = new HttpError(`Something went wrong. Could not delete the friend`, 500);
        return next(error);
    }

    if (!friend) {
        const error = new HttpError('Coud not find the friend', 404);
        return next(error); 
    }

    try {
        //remove and pull,  
        //we need session to start our transaction and only we can delete the friend
        //and if we can delete the friend the from the corresponding user then the code will be executed..
        const sess = await mongoose.startSession(); //current session
        sess.startTransaction();
        //after starting transaction we can implement the logic for deleting friend
        await friend.remove({ session: sess }); //session property to refer sess(current session)
        friend.friendOf.friends.pull(friend);



        // await friend.remove() //as .save() method 
    } catch (err) {
        const error = new HttpError(`Something went wrong. Could not delete!!!`, 500);
        return next(error);
    }

    res.status(200).json({ message: 'Deleted user' });
};

exports.getAllFriends = getAllFriends; 
exports.getByLocation = getByLocation; 
exports.getFriendById = getFriendById; //I don't execute it. express will. so don't envoke it
exports.createFriend = createFriend; 
exports.updateFriend = updateFriend; 
exports.deleteFriend = deleteFriend; 