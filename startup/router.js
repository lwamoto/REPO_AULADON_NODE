const express = require('express');
const personRoutes = require('../src/routes/personRoutes');
const carRoutes = require('../src/routes/carRoutes')

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
    app.use('/api', carRoutes)
};


