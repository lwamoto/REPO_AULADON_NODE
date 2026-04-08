const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'A idade não pode ser negativa.']
    }
});

const PersonModel = mongoose.model('PersonModel', personSchema);

module.exports = PersonModel;