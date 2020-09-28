const HttpError = require('../models/http-error');
const User = require('../models/user');
const { v4: uuid4 } = require('uuid');

let DUMMY = [
  {
    uid: 'u1',
    name: 'Kainy',
    email: 'test@test.com',
    password: 'test',
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY });
};

const signup = async (req, res, next) => {
  const { name, email, password, location } = req.body;

  let existingUser;
  try {
    const existingUser = await User.findOne({ email: email });
  } catch(err) {
    const error = new HttpError (
      `Signing up failed, please try again later`, 500
    )
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError (`User exists already, please login instead`, 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    location
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError (`Signing up failed, please try again.`, 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    const identifiedUser = DUMMY.find( u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      return next(
        new HttpError(`Could not identify user, credentials seem to be wrong`, 401)
      ); 
    }

    res.json({ message: 'Logged in!' });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
