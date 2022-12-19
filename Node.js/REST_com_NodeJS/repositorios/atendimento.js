const query = require('../infraestrutura/database/queries')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO tbl_Atendimentos SET ? ;'
        return query(sql, atendimento)
    }

    lista() {
        return repositorio.lista()
    }
}

module.exports = new Atendimento