const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/checkAuth', user.checkAuth);
// router.get('/:id', user.getUserData); // Fetch user data
// router.post('/:id', user.updateUserData); // Update user data

module.exports = router;
