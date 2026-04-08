const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    const db = config.get('db');
    mongoose.connect(db)
        .then(() => console.log(`Conectado ao MongoDB: ${db}`))
        .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
}