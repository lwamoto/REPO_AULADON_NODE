const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value <= new Date().getFullYear();
            },
            message: 'O ano não pode ser maior que o ano atual.'
        }
    },
    km: {
        type: Number,
        required: true,
        min: [0, 'A quilometragem não pode ser negativa.']
    },
    turbo: {
        type: Boolean,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonModel',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const CarModel = mongoose.model('CarModel', carSchema);

module.exports = CarModel;
