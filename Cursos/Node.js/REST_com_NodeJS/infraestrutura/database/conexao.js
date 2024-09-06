const mysql = require('mysql2')

const conexao = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'g=9.80665M/s^2',
        database: 'agenda-petshop'
    }
)

module.exports = conexao