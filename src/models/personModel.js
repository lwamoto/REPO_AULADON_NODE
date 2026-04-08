const mongoose = require('mongoose');

const PersonModel = mongoose.model('PersonModel', {
    name: String,
    lastName: String,
    salary: Number
});

module.exports = PersonModel;
