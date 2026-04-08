const mongoose = require('mongoose');

const CarModel = mongoose.model('CarModel', {
    name: String,
    brand: String,
    year: Int16Array
});

module.exports = CarModel;
