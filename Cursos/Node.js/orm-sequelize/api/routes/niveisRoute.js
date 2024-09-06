const { Router } = require('express')
const NivelController = require('../controllers/NivelController')


const router = Router()

router
    // CRUD Niveis
    .post('/niveis', NivelController.criaNivel) // Create
    .get('/niveis', NivelController.retornaTodosOsNiveis) // Read all
    .get('/niveis/:id', NivelController.retornaUmNivel) // Read one
    .put('/niveis/:id', NivelController.atualizaNivel) // Update
    .delete('/niveis/:id', NivelController.apagaNivel) // Delete
    .post('/niveis/:id/restaura', NivelController.restauraNivel) // Restore

module.exports = router
