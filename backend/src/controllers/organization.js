const Organization = require('../models/organization');

exports.getOrganizationsByLocation = (req, res) => {
  const location = req.query.location;
  Organization.findByLocation(location, (results) => {
    res.json(results);
  });
};

exports.createOrganization = (req, res) => {
  const organization = req.body;
  Organization.createOrganization(organization, (result) => {
    res.status(201).json({ id: result.insertId, ...organization });
  });
};

exports.getAllOrganizations = (req, res) => {
  Organization.getAll((results) => {
    res.json(results);
  });
};