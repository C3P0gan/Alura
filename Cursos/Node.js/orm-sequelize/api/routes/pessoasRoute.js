const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()

router
    // CRUD Pessoas
    .post('/pessoas', PessoaController.criaPessoa) // Create
    .get('/pessoas/ativas', PessoaController.retornaPessoasAtivas) // Read active
    .get('/pessoas/todos', PessoaController.retornaTodasAsPessoas) // Read all
    .get('/pessoas/:id', PessoaController.retornaUmaPessoa) // Read one
    .put('/pessoas/:id', PessoaController.atualizaPessoa) // Update
    .delete('/pessoas/:id', PessoaController.apagaPessoa) // Delete
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa) // Restore
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa) // Cancel

    // CRUD Matricula
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula) // Create
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.retornaUmaMatricula) // Read one
    .get('/pessoas/:estudanteId/matricula', PessoaController.retornaMatriculas) // Read confirmed
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.retornaMatriculasPorTurma) // Read by id
    .get('/pessoas/matricula/lotada', PessoaController.retornaTurmasLotadas) // Read full
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula) // Update
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula) // Delete
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula) // Restore

module.exports = router
