const database = require('../models')
const { Op } = require('sequelize')


class TurmaController {
    // CRUD Turma
    // Create
    static async criaTurma(req, res) {
        const novaTurma = req.body

        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)

            return res
                .status(201) // Created
                .json(novaTurmaCriada)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read all
    static async retornaTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}

        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        
        try {
            const todasAsTurmas = await database.Turmas.findAll({ where })

            return res
                .status(200) // OK
                .json(todasAsTurmas)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read one
    static async retornaUmaTurma(req, res) {
        const { id } = req.params

        try {
            const umaTurma = await database.Turmas.findOne({
                where: { id: Number(id) }
            })

            return res
                .status(200) // OK
                .json(umaTurma)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }


    // Update
    static async atualizaTurma(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Turmas.update(novasInfos, {
                where: { id: Number(id) }
            })

            const turmaAtualizada = await database.Turmas.findOne({
                where: { id: Number(id) }
            })

            return res
                .status(200) // OK
                .json(turmaAtualizada)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Delete
    static async apagaTurma(req, res) {
        const { id } = req.params

        try {
            await database.Turmas.destroy({
                where: { id: Number(id) }
            })

            return res
                .status(204) // No Content
                .end()
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Restore
    static async restauraTurma(req, res) {
        const { id } = req.params
        
        try {
            await database.Turmas.restore({
                where: { id: Number(id) }
            })
            
            return res
                .status(204) // No Content
                .end()
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }
}

module.exports = TurmaController
