const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donation');
const multer = require('multer');
const path = require('path');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('screenshot'), donationController.createDonation);
router.get('/:organizationId', donationController.getDonationsByOrganization);

module.exports = router;
