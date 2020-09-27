const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, require: true }
});

module.exports = mongoose.model('User', userSchema);
// model function require two arguments. ('the name of the schema', refers to the name of the schema that we created);