const mongoose = require('mongoose');

const PersonCar = mongoose.model('PersonCar', {
    name: String,
    lastName: String,
    salary: Number
});

module.exports = PersonCar;
