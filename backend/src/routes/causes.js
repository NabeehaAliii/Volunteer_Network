const express = require('express');
const router = express.Router();
const causesController = require('../controllers/causes');

router.get('/', causesController.getAllCauses);

module.exports = router;
