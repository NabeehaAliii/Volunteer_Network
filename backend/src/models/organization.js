const db = require('../db/db');

class Organization {
  static findByLocation(location, callback) {
    db.query('SELECT * FROM organizations WHERE location = ?', [location], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static createOrganization(organization, callback) {
    db.query('INSERT INTO organizations SET ?', organization, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  static getAll(callback) {
    db.query('SELECT * FROM organizations', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static findById(id, callback) {
    const query = 'SELECT * FROM organizations WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error during findById query:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  }
}

module.exports = Organization;
