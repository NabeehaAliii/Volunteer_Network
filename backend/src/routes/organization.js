const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organization');

router.get('/', organizationController.getAllOrganizations);
router.get('/location', organizationController.getOrganizationsByLocation);
router.post('/', organizationController.createOrganization);

module.exports = router;
