const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signout', authController.signOut);

module.exports = router;
