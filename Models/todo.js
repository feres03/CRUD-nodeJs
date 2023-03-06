const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Name is required']
    },
    Description: {
        type: String,
        required: [true, 'Description is required']
    },
}, {
    timestamps: true, versionKey: false
})
const todo = mongoose.model('todo', todoSchema)
module.exports = todo;