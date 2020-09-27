const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    emil: { type: String, required: true },
    password: { type: String, required: true },
    graduated: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', userSchema);
// model function require two arguments. ('the name of the schema', refers to the name of the schema that we created);