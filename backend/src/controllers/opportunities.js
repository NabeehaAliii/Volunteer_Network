const Opportunity = require('../models/opportunity');
const Organization = require('../models/organization');

exports.createOpportunity = (req, res) => {
  const { organization, causes, skills, location, objective, type, title } = req.body;
  // console.log('Request body:', req.body); // Log request body

  if (!organization) {
    return res.status(400).send({ message: 'Organization is required' });
  }

  Organization.findById(organization, (err, org) => {
    if (err) {
      console.error('Database error during organization lookup:', err);
      return res.status(500).send({ message: 'Database error during organization lookup' });
    }
    if (!org) {
      return res.status(400).send({ message: 'Organization does not exist' });
    }

    const organization_id = org.id;
    const organization_name = org.name;

    Opportunity.create({ organization_id, organization: organization_name, location, objective, type, title }, (err, opportunityId) => {
      if (err) {
        console.error('Error creating opportunity:', err);
        return res.status(500).send({ message: 'Error creating opportunity' });
      }
      causes.forEach((causeId) => {
        Opportunity.addCause(opportunityId, causeId, (err) => {
          if (err) console.error('Error adding cause:', err);
        });
      });

      skills.forEach((skillId) => {
        Opportunity.addSkill(opportunityId, skillId, (err) => {
          if (err) console.error('Error adding skill:', err);
        });
      });

      res.status(201).send('Opportunity posted successfully');
    });
  });
};

exports.getAllOpportunities = (req, res) => {
  Opportunity.getAll((err, results) => {
    if (err) {
      console.error('Error getting opportunities:', err);
      return res.status(500).send({ message: 'Error getting opportunities' });
    }
    res.json(results);
  });
};

exports.getFilteredOpportunities = (req, res) => {
  const filters = {
    location: req.query.location,
    cause: req.query.cause,
    skill: req.query.skill,
    type: req.query.type,
  };

  Opportunity.getFilteredOpportunities(filters, (err, opportunities) => {
    if (err) {
      return res.status(500).send('Server Error');
    }
    if (opportunities.length === 0) {
      return res.status(200).json([]); // Ensure an empty array is returned when no results are found
    }
    res.status(200).json(opportunities);
  });
};
