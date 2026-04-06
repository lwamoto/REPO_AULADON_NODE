const PersonCar = require('../models/PersonCar');

class PersonCarController {
    static async create(req, res) {
        try {
            const { name, lastName, salary } = req.body;
            if (!name || !lastName || !salary) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const personCarData = {
                name,
                lastName,
                salary
            };
            const newPersonCar = await PersonCar.create(personCarData);
            return res.status(201).json({ message: 'PessoaCarro criada com sucesso', data: newPersonCar });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar pessoaCarro', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const people = await PersonCar.find();
            return res.status(200).json({ data: peopleCar });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoasCarro', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const personCar = await PersonCar.findById(id);
            if (!personCar) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ data: personCar });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoa', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, lastName, salary } = req.body;
            const updatedData = {
                name,
                lastName,
                salary
            };
            const updatedPersonCar = await PersonCar.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedPersonCar) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa atualizada com sucesso', data: updatedPersonCar });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar pessoa', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedPersonCar = await PersonCar.findByIdAndDelete(id);
            if (!deletedPersonCar) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar pessoa', error: error.message });
        }
    }
}

module.exports = PersonCarController;
