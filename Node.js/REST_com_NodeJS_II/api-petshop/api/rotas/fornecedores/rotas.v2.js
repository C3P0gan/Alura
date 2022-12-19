const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor
const Fornecedor = require('./Fornecedor')


// OPTIONS
roteador.options('/', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'GET')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204) // No Content
    resposta.end()
})

// Listar fornecedores V2
roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.status(200) // OK
    const serializador = new SerializadorFornecedor(
        resposta.getHeader('Content-Type')
    )
    resposta.send(
        serializador.serializar(resultados)
    )
})

// Cadastrar fornecedores V2
roteador.post('/', async (requisicao, resposta, proximo) => {
    try{
        const fornecedor = new Fornecedor(requisicao.body)
        await fornecedor.criar()
        const serializador = new SerializadorFornecedor(
            resposta.getHeader('Content-Type')
        )
        resposta.status(201) // Created
        resposta.send(
            serializador.serializar(fornecedor)
        )
    } catch (erro) {
        proximo(erro)
    }
})

module.exports = roteador
