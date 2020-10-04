const mongoose = require('mongoose');

const db = mongoose.connection;

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    friendOf: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
    //ref will allows you to establish to connect to 'User' Schema
});

module.exports = db.model('Friend', friendSchema);
// model function require two arguments. ('the name of the schema', refers to the name of the schema that we created);