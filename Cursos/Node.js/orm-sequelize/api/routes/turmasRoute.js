const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')


const router = Router()

router
    // CRUD Niveis
    .post('/turmas', TurmaController.criaTurma) // Create
    .get('/turmas', TurmaController.retornaTodasAsTurmas) // Read all
    .get('/turmas/:id', TurmaController.retornaUmaTurma) // Read one
    .put('/turmas/:id', TurmaController.atualizaTurma) // Update
    .delete('/turmas/:id', TurmaController.apagaTurma) // Delete
    .post('/turmas/:id/restaura', TurmaController.restauraTurma) // Restore

module.exports = router
