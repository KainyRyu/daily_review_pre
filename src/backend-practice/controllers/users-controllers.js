const HttpError = require('../models/http-error');
const User = require('../models/user');

const signup = async (req, res, next) => {
    const {name, email, password} = req.body;

    let existingUser;   
    try {
        existingUser = await User.findOne({ email: email});
    } catch (err) {
        const error = new HttpError('Something went wrong, try again later', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('User exist already, please login instead', 422);
        return next(error);
    }

    const createdUser = new User({
        name, 
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError ('Login failed, please try again', 500);
        return next(error);
    }

    res.status(201).json({ users: createdUser.toObject({ getters: true })});
}

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError ('Fetching users failed, please try again later.', 500);
        return next(error);
    }
    res.json({ users: users.map(u => u.toObject({ getters: true }))});
}

const signin = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError('Logging in failed, please try again later', 500);
        return next(error);
    }
    
    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError('Invalid credentials, could not log you in.', 401);
        return next(error);
    }  
    
    res.json({message: "Logged in!"});
}

exports.signup = signup;
exports.getAllUsers = getAllUsers;
exports.signin = signin;