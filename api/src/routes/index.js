const { Router } = require('express');
const pokemonRoute = require('./Pokemon');
const router = Router();

router.use('/', pokemonRoute);


module.exports = router;
