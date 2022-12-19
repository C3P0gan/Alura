const database = require('../models')


class Services {
    constructor (nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async retornaTodosOsRegistros (where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async retornaUmRegistro (id) {
        //
    }

    async criaRegistro (dados) {
        //
    }

    async atualizaRegistro (dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { id: id } }, transacao)
    }

    async atualizaRegistros (dadosAtualizados, where, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where } }, transacao)
    }

    async apagaRegistro (id) {
        //
    }
}

module.exports = Services
