const Services = require('./Services')
const database = require('../models')


class PessoasServices extends Services {
    constructor () {
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    // Métodos específicos do controlador de Pessoas
    async retornaRegistrosAtivos (where = {}) {
        return database[this.nomeDoModelo].findAll({
            where: { ...where }
        })
    }

    async retornaTodosOsRegistros (where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: { ...where } })
    }

    async cancelaPessoaEMatriculas (estudanteId) {
        return database.sequelize.transaction(async t => {
            await super.atualizaRegistro(
                { ativo: false },
                estudanteId,
                { transaction: t }
            )

            await this.matriculas.atualizaRegistros(
                { status: 'cancelado' },
                { estudante_id: estudanteId },
                { transaction: t }
            )
        }
    )}
}

module.exports = PessoasServices
