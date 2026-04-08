const Car = require('../models/carModel');

class CarController {
    static async create(req, res) {
        try {
            const newCar = await Car.create(req.body);
            return res.status(201).json({ message: 'Carro criado com sucesso', data: newCar });
        } catch (error) {
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro ao criar carro', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const filtro = { isActive: true };

            if (req.query.brand) filtro.brand = req.query.brand;
            if (req.query.year)  filtro.year  = req.query.year;

            const cars = await Car.find(filtro).populate('owner');
            return res.status(200).json({ data: cars });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar carros', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const car = await Car.findById(req.params.id).populate('owner');
            if (!car) {
                return res.status(404).json({ message: 'Carro não encontrado' });
            }
            return res.status(200).json({ data: car });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar carro', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedCar = await Car.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedCar) {
                return res.status(404).json({ message: 'Carro não encontrado' });
            }
            return res.status(200).json({ message: 'Carro atualizado com sucesso', data: updatedCar });
        } catch (error) {
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro ao atualizar carro', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedCar = await Car.findByIdAndUpdate(
                req.params.id,
                { isActive: false },
                { new: true }
            );
            if (!deletedCar) {
                return res.status(404).json({ message: 'Carro não encontrado' });
            }
            return res.status(200).json({ message: 'Carro deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar carro', error: error.message });
        }
    }
}

module.exports = CarController;