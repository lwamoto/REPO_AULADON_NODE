const Car = require('..models/carModel');

class CarController {
    static async create(req, res) {
        try {
            const { name, brand, year } = req.body;
            if (!name || !brand || !year) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const carData = {
                name,
                brand,
                year
            };
            const newCar = await Car.create(carData);
            return res.status(201).json({ message: 'carro criada com sucesso', data: newCar });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar carro', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const cars = await Car.find();
            return res.status(200).json({ data: cars });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar carro', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const car = await Car.findById(id);
            if (!car) {
                return res.status(404).json({ message: 'carro não encontrada' });
            }
            return res.status(200).json({ data: car });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar carro', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, brand, year } = req.body;
            const updatedData = {
                name,
                brand,
                year
            };
            const updatedCar = await Car.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedCar) {
                return res.status(404).json({ message: 'carro não encontrada' });
            }
            return res.status(200).json({ message: 'carro atualizada com sucesso', data: updatedCar });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar carro', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedCar = await Car.findByIdAndDelete(id);
            if (!deletedCar) {
                return res.status(404).json({ message: 'carro não encontrada' });
            }
            return res.status(200).json({ message: 'carro deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar carro', error: error.message });
        }
    }
}