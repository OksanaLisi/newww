const { Schema, model} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true},
    text: { type: String },
    completed: { type: Boolean, default: false },
    important: { type: Boolean, default: false }  
});

module.exports = model('User', schema);