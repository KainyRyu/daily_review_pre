const mongoose = require('mongoose');

const User = require('./models/users');

mongoose.connect('mongodb+srv://kainy_admin:6PJt5uISlwnILn08@cluster0.osruv.mongodb.net/Daily_Review?retryWrites=true&w=majority')
            //so we don't have to open and close connect each time we create a new user
    .then(() => {
        console.log('Connected to database!')
    }).catch(() => {
        console.log('connection failed!')
    });

const createUser = async (req, res, next) => {
    const createdUser = new User({
        name: req.body.name,
        age: req.body.age
    });

    const result = await createdUser.save();
        //save refers to the right database, database appear specified in our credentialsk
    res.json(result);
}

const getUsers = async (req, res, next) => {
    const users = await User.find().exec();
    res.json(users);
}

exports.createUser = createUser;
exports.getUsers = getUsers;