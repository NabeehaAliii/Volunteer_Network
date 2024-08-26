const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res) => {
    const { name, username, email, password } = req.body;

    if (!username || !name || !email || !password) {
        return res.status(400).json({ error: "username, name, Email and password are required." });
    }

    User.findByEmail(email, (existingUser) => {
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({ error: err });
            } else {
                const newUser = { name, username, email, password: hash };

                User.createUser(newUser, (result) => {
                    res.status(201).json({ message: 'User created successfully' });
                });
            }
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    User.findByEmail(email, (user) => {
        if (!user) {
            return res.status(401).json({ message: 'User Profile not Found' });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err
                || !result) {
                return res.status(401).json({ message: 'Email did not match'});
            }

            const token = jwt.sign(
                { email: user.email },
                "your_secret_key",
                { expiresIn: '1h' }
            );

            res.status(200).json({
                message: 'Authentication successful',
                token: token
            });
        });
    });
};

// exports.getUserData = (req, res) => {
    // const userId = req.params.id;
    // User.findById(userId, (user) => {
        // if (!user) {
            // return res.status(404).json({ message: 'User not found' });
        // }

        // User.findProfileByUserId(userId, (profile) => {
            // if (!profile) {
                // return res.status(404).json({ message: 'User profile not found' });
            // }
            // res.json({ ...user, ...profile });
        // });
    // });
// };

// exports.updateUserData = (req, res) => {
    // // const userId = req.params.id;
    // // const updateData = req.body;

    // // User.updateUser(userId, updateData, (result) => {
        // // if (result.affectedRows === 0) {
            // // return res.status(404).json({ message: 'User not found' });
        // // }

        // // User.updateProfile(userId, updateData, (result) => {
            // // if (result.affectedRows === 0) {
                // // return res.status(404).json({ message: 'User profile not found' });
            // // }
            // // res.json({ message: 'User and profile updated successfully' });
        // // });
    // // });
// };

// exports.signout = (req, res) => {
// req.session.destroy((err) => {
// if (err) {
// return res.status(500).json({ message: 'Failed to sign out' });
// }
// res.clearCookie('connect.sid');
// return res.status(200).json({ message: 'Signed out successfully' });
// });
// };

// Sign out function
exports.checkAuth = (req, res) => {
    if (req.session && req.session.user) {
        res.status(200).json({ authenticated: true, user: req.session.user });
    } else {
        res.status(200).json({ authenticated: false });
    }
};
