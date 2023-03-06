const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    FirstName: {
        type: String,
        required: [true, 'FirstName is required']
    },
    LastName: {
        type: String,
        required: [true, 'LastName is required']
    },
    Email: {
        type: String,
        required: [true, 'Email is required']
    },
    Password: {
        type: String,
        required: [true, 'Password is required']
    },
    Age: {
        type: Number,
        required: [true, 'Age is required']
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todo',
    }]
    /**
     * related to todo model 
     */

}, {
    timestamps: true, versionKey: false
})


const user = mongoose.model('user', userSchema);
module.exports = user;