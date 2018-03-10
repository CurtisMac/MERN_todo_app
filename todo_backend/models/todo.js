const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    },
    created_at: Date,
    updated_at: Date
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;