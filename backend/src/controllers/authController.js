const jwt = require('jsonwebtoken');
const tokenBlacklist = require('../models/authcontroller');

// Sign out function
exports.signOut = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    tokenBlacklist.addToBlacklist(token); // Add the token to the blacklist
    res.status(200).json({ message: 'Signed out successfully' });
};

// Middleware to check if token is blacklisted
exports.checkBlacklist = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (tokenBlacklist.isBlacklisted(token)) {
        return res.status(401).json({ message: 'Token is invalid' });
    }
    next();
};
