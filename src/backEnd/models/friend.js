const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    friendOf: [{ type: mongoose.Types.ObjectId, required: true, ref: 'User' }]
    //ref will allows you to establish to connect to 'User' Schema
});

module.exports = mongoose.model('Friend', friendSchema);
// model function require two arguments. ('the name of the schema', refers to the name of the schema that we created);