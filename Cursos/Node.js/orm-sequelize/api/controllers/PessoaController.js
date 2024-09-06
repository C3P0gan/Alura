// const database = require('../models')
// const { literal } = require('sequelize')

const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()


class PessoaController {
    // Pessoa
    // Create
    static async criaPessoa(req, res) {
        const novaPessoa = req.body

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)

            return res
                .status(201) // Created
                .json(novaPessoaCriada)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read active
    static async retornaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await pessoasServices.retornaRegistrosAtivos()

            return res
                .status(200) // OK
                .json(pessoasAtivas)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read all
    static async retornaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.retornaTodosOsRegistros()

            return res
                .status(200) // OK
                .json(todasAsPessoas)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read one
    static async retornaUmaPessoa(req, res) {
        const { id } = req.params

        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res
                .status(200) // OK
                .json(umaPessoa)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Update
    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Pessoas.update(novasInfos, {
                where: { id: Number(id) }
            })

            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) }
            })

            return res
                .status(200) // OK
                .json(pessoaAtualizada)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Delete
    static async apagaPessoa(req, res) {
        const { id } = req.params

        try {
            await database.Pessoas.destroy({
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
    static async restauraPessoa(req, res) {
        const { id } = req.params
        
        try {
            await database.Pessoas.restore({
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

    // Cancel
    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params
        
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
    
            return res
                .status(204) // No Content
                .end()
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }
    
    // Matrícula
    // Create
    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            
            return res
            .status(201) // Created
            .json(novaMatriculaCriada)
        } catch (error) {
            return res
            .status(500) // Internal Server Error
            .json(error.message)
        }
    }
    
    // Read one
    static async retornaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res
                .status(200) // OK
                .json(umaMatricula)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Update
    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { id: Number(matriculaId) }
            })

            return res
                .status(200) // OK
                .json(matriculaAtualizada)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Delete
    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
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
    static async restauraMatricula(req, res) {
        const { id } = req.params

        try {
            await database.Matriculas.restore({
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

    // Read confirmed
    static async retornaMatriculas(req, res) {
        const { estudanteId } = req.params
        
        try {
            const pessoa = await database.Pessoas.findOne({
                where: { id: Number(estudanteId) }
            })

            const matriculas = await pessoa.getAulasMatriculadas()

            return res
                .status(200) // OK
                .json(matriculas)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read by id
    static async retornaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        
        try {
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 20,
                order: [['estudante_id', 'DESC']]
            })

            return res
                .status(200) // OK
                .json(todasAsMatriculas)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

    // Read full
    static async retornaTurmasLotadas(req, res) {
        const lotacaoTurma = 2
        
        try {
            const turmasLotadas = await database.Matriculas.findAndCountAll({
                where: {
                    status: 'confirmado',
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: literal(`count(turma_id) >= ${lotacaoTurma}`)
            })

            return res
                .status(200) // OK
                .json(turmasLotadas.count)
        } catch (error) {
            return res
                .status(500) // Internal Server Error
                .json(error.message)
        }
    }

}

module.exports = PessoaController
