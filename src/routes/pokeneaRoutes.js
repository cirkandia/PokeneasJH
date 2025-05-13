const express = require('express');
const router = express.Router();
const { getPokeneaJson, getPokeneaView } = require('../controllers/pokeneaController');

router.get('/pokenea/json', getPokeneaJson);
router.get('/pokenea/view', getPokeneaView);

module.exports = router;