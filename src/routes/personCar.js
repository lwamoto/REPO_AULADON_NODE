const express = require('express');
const router = express.Router();
const PersonCarController = require('../controllers/PersonCarController');

router
    .get('/peopleCar', PersonCarController.getAll)
    .post('/peopleCar', PersonCarController.create)
    .get('/peopleCar/:id', PersonCarController.getById)
    .put('/peopleCar/:id', PersonCarController.update)
    .delete('/peopleCar/:id', PersonCarController.delete)

module.exports = router;
