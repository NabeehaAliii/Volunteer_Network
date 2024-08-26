const db = require('../db/db');

class Donation {
  static createDonation(donation, callback) {
    db.query('INSERT INTO donations SET ?', donation, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = Donation;
