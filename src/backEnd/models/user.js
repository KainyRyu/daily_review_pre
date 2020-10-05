const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    // location: { type: String, required: true },
    friends: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Friend' }]
});

module.exports = mongoose.model('User', userSchema);

