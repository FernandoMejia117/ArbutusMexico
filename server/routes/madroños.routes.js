const express = require('express');
const router = express.Router();
const Controladormadroño =  require('../controller/madroños.controller')

router.get('/',Controladormadroño.indexMadroño)
      .post('/',Controladormadroño.crearMadroño)

module.exports = router;