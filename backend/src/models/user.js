const db = require('../db/db');

class User {
    static findByEmail(email, callback) {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    }

    static findByUsername(username, callback) {
        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    }

    static findById(id, callback) {
        db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    }

    // static updateUser(id, updateData, callback) {
        // // db.query('UPDATE users SET ? WHERE id = ?', [updateData, id], (err, result) => {
            // // if (err) throw err;
            // // callback(result);
        // // });
    // }

    static createUser(user, callback) {
        db.query('INSERT INTO users SET ?', user, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    static findProfileByUserId(userId, callback) {
        db.query('SELECT * FROM UserProfile WHERE user_id = ?', [userId], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    }

    // static updateProfile(userId, updateData, callback) {
        // db.query('UPDATE UserProfile SET ? WHERE user_id = ?', [updateData, userId], (err, result) => {
            // if (err) throw err;
            // callback(result);
        // });
    // }

    static createProfile(profile, callback) {
        db.query('INSERT INTO UserProfile SET ?', profile, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = User;
