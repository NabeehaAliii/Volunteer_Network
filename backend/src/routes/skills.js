const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.getAllSkills);

module.exports = router;
