// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')


class NivelController {
    // CRUD Nivel
    // Create
    static async criaNivel(req, res) {
        const novoNivel = req.body

        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)

            return res
                .status(201) // Created
                .json(novoNivelCriado)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read all
    static async retornaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await niveisServices.retornaTodosOsRegistros()

            return res
                .status(200) // OK
                .json(todosOsNiveis)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read one
    static async retornaUmNivel(req, res) {
        const { id } = req.params

        try {
            const umNivel = await database.Niveis.findOne({
                where: { id: Number(id) }
            })

            return res
                .status(200) // OK
                .json(umNivel)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }


    // Update
    static async atualizaNivel(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos, {
                where: { id: Number(id) }
            })

            const nivelAtualizado = await database.Niveis.findOne({
                where: { id: Number(id) }
            })

            return res
                .status(200) // OK
                .json(nivelAtualizado)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Delete
    static async apagaNivel(req, res) {
        const { id } = req.params

        try {
            await database.Niveis.destroy({
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
    static async restauraNivel(req, res) {
        const { id } = req.params
        
        try {
            await database.Niveis.restore({
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

module.exports = NivelController
