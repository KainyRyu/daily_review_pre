const { v4: uuid4 } = require('uuid');
const mongoose = require('mongoose');

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
    //cosnt location = req.body.location;
    const createdFriend = new Friend ({
        name, 
        sex, 
        age, 
        location,
        friendOf
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
        const sess = await mongoose.startSession(); //It's your current session. when you want to create a new friend
        sess.startTransaction();
        //after this you tell mongoose what you want to do
        await createdFriend.save({ session: sess }); 
        //Now we stored the friend
        user.friends.push(createdFriend); // add createdFriend to friends in user's data.
        // Push here, kind of allows Mongoose to behind the scene 
        // establish the connection between the two models we are referring to
        // so to say very important here behind the scene MongoDB grabs the created friend ID that an integrated Mongoose feature here.
        // and adds it to the friends feed of the user.
        // so it only adds the friend's id
        await user.save({ session: sess }); 
        // we are saving the updated user (updated current session)
        //Only all these tasks have succeed 👇
        await sess.commitTransaction();
        // if anything would've gone wrong in the tasks that are part of the sessions and transactions 
        // all changes would've been rolled back automatically by MongoDB.
        //Only if this is successful then the friend will be created and the user will be updated

        // await createdFriend.save();
    } catch(err) {
        const error = new HttpError(
            `Creating friend failed, please try again.`, 500
        );
        return next(error);
        //this error code could occur either our database server is down 
        //or something related to that or database validation failes
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
        friend = await Friend.findById(friendId);
    } catch (err) {
        const error = new HttpError(`Something went wrong. Could not delete the friend`, 500);
        return next(error);
    }

    try {
        await friend.remove() //as .save() method 
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