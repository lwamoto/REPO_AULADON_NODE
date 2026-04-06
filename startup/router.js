const express = require('express');
const personCarRoutes = require('../src/routes/personCar');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personCarRoutes);
};
