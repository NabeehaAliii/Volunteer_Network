const db = require('../db/db');

class Cause {
  static getAll(callback) {
    db.query('SELECT * FROM causes', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Cause;
