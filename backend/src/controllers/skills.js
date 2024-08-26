const Skill = require('../models/skill');

exports.getAllSkills = (req, res) => {
  Skill.getAll((skills) => {
    res.json(skills);
  });
};
