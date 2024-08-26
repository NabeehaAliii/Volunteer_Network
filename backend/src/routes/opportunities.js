const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunities');

router.post('/', opportunityController.createOpportunity);
router.get('/all', opportunityController.getAllOpportunities);
router.get('/getFilteredOpportunities', opportunityController.getFilteredOpportunities);

module.exports = router;
