const Donation = require('../models/donation');

exports.createDonation = (req, res) => {
  const { donor_name, donor_email, donor_phone, amount, organization_id } = req.body;
  let { date } = req.body;
  let screenshot = null;

  if (req.file) {
    screenshot = req.file.filename;
  } else {
    return res.status(400).json({ error: 'Screenshot is required' });
  }

  if (!date) {
    date = new Date(); // Set current date if not provided
  }

  const donation = { donor_name, donor_email, donor_phone, amount, date, organization_id, screenshot };

  Donation.createDonation(donation, (result) => {
    res.status(201).json({ id: result.insertId, ...donation });
  });
};

exports.getDonationsByOrganization = (req, res) => {
  const organizationId = req.params.organizationId;
  Donation.getDonationsByOrganization(organizationId, (results) => {
    res.json(results);
  });
};
