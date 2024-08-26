const Cause = require('../models/cause');

exports.getAllCauses = (req, res) => {
  Cause.getAll((causes) => {
    res.json(causes);
  });
};
