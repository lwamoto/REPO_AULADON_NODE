const express = require('express');
const router = express.Router();
const CarController = require('../controllers/carController');

router
    .get('/cars', CarController.getAll)
    .post('/cars', CarController.create)
    .get('/cars/:id', CarController.getById)
    .put('/cars/:id', CarController.update)
    .delete('/cars/:id', CarController.delete)

module.exports = router;
