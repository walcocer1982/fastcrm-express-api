const express = require('express');
const router = express.Router();
const plantillaController = require('../controllers/plantillaController');

// Rutas para plantillas
router.get('/', plantillaController.getPlantillas);
// router.get('/search', plantillaController.buscarPlantillas); // Comentar esta línea
router.get('/:id', plantillaController.getPlantilla);
router.post('/', plantillaController.crearPlantilla);
router.put('/:id', plantillaController.actualizarPlantilla);
router.delete('/:id', plantillaController.eliminarPlantilla);

module.exports = router; 