const db = require('../db/db');

class Skill {
  static getAll(callback) {
    db.query('SELECT * FROM skills', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Skill;
