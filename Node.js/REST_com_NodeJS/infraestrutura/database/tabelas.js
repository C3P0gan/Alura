class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS\
         tbl_Atendimentos (\
            _id int NOT NULL AUTO_INCREMENT PRIMARY KEY\
            , cliente VARCHAR(11) NOT NULL\
            , pet VARCHAR(20) NULL\
            , servico VARCHAR(20) NOT NULL\
            , data datetime NOT NULL\
            , dataCriacao datetime NOT NULL\
            , status VARCHAR(20) NOT NULL\
            , observacoes text)'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }

    criarPets() {
        const sql = 'CREATE TABLE IF NOT EXISTS\
         tbl_Pets (\
            _id int NOT NULL AUTO_INCREMENT PRIMARY KEY\
            , nome varchar(50) NOT NULL\
            , imagem varchar(200) NULL)'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas