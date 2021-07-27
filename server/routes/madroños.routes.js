const express = require('express');
const router = express.Router();
const Controladormadroño =  require('../controller/madroños.controller')

router.get('/',Controladormadroño.indexMadroño)
      .post('/',Controladormadroño.crearMadroño)
      .get('/:key/:value',Controladormadroño.buscarMadroño,Controladormadroño.mostrarMadroño)
      .put('/:key/:value',Controladormadroño.buscarMadroño,Controladormadroño.actualizarMadroño)
      .delete('/:key/:value',Controladormadroño.buscarMadroño,Controladormadroño.eliminarMadroño)

module.exports = router;