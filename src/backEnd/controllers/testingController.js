const HttpError = require('../models/http-error');
const User = require('../models/friend')
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

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY.find(u => u.email === email);
  if (hasUser) {
    throw new HttpError('Could not create user, email already exists.', 422);
  }

  const createdUser = {
    id: uuid4(),
    name,
    email,
    password,
  };

  DUMMY.push(createdUser);

  res.status(201).json({ ...createdUser });
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    const identifiedUser = DUMMY.find( u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      throw new HttpError(`Could not identify user, credentials seem to be wrong`, 401);
    }

    res.json({ message: 'Logged in!' });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
