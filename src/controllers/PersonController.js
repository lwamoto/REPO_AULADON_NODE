const Person = require('../models/personModel'); // corrigido

class PersonController {
    static async create(req, res) {
        try {
            const newPerson = await Person.create(req.body); // Mongoose valida pelo required
            return res.status(201).json({ message: 'Pessoa criada com sucesso', data: newPerson });
        } catch (error) {
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro ao criar pessoa', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const people = await Person.find();
            return res.status(200).json({ data: people });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoas', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const person = await Person.findById(req.params.id);
            if (!person) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ data: person });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoa', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedPerson = await Person.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedPerson) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa atualizada com sucesso', data: updatedPerson });
        } catch (error) {
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro ao atualizar pessoa', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedPerson = await Person.findByIdAndDelete(req.params.id);
            if (!deletedPerson) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar pessoa', error: error.message });
        }
    }
}

module.exports = PersonController; // faltava isso