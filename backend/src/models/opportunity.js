const db = require('../db/db');

class Opportunity {
    static create({ organization_id, organization, location, objective, type, title }, callback) {
        const query = 'INSERT INTO opportunities (organization_id, organization, location, objective, type, title) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [organization_id, organization, location, objective, type, title], (err, result) => {
            if (err) {
                console.error('Error during opportunity creation query:', err);
                return callback(err);
            }
            callback(null, result.insertId);//for creating
        });
    }

    static addCause(opportunityId, causeId, callback) {
        const query = 'INSERT INTO opportunity_causes (opportunity_id, cause_id) VALUES (?, ?)';
        db.query(query, [opportunityId, causeId], (err, result) => {
            if (err) {
                console.error('Error during addCause query:', err);
                return callback(err); // add cause table
            }
            callback(null, result);
        });
    }

    static addSkill(opportunityId, skillId, callback) {
        const query = 'INSERT INTO opportunity_skills (opportunity_id, skill_id) VALUES (?, ?)';
        db.query(query, [opportunityId, skillId], (err, result) => {
            if (err) {
                console.error('Error during addSkill query:', err); //add skill table opportunity
                return callback(err);
            }
            callback(null, result);
        });
    }

    static getAll(callback) {
        const query = 'SELECT * FROM opportunities';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error during getAll query:', err);
                return callback(err);
            }
            callback(null, results);
        });
    }
    
    static getFilteredOpportunities(filters, callback) {
        let query = `SELECT o.*, org.name as organization_name, o.location 
                     FROM opportunities o 
                     JOIN organizations org ON o.organization_id = org.id
                     WHERE 1=1`;   //will never be false
        
        const params = [];
    
        if (filters.location) {
          query += ` AND o.location = ?`;
          params.push(filters.location);
        }
    
        if (filters.cause) {
          query += ` AND o.id IN (SELECT opportunity_id FROM opportunity_causes WHERE cause_id = ?)`;
          params.push(filters.cause);
        }
    
        if (filters.skill) {
          query += ` AND o.id IN (SELECT opportunity_id FROM opportunity_skills WHERE skill_id = ?)`;
          params.push(filters.skill);
        }
    
        if (filters.type) {
          query += ` AND o.type = ?`;
          params.push(filters.type);
        }

        // console.log('Query:', query); // Log query
        // console.log('Params:', params); // Log parameters

        db.query(query, params, (err, results) => {
          if (err) {
            console.error('Error during getFilteredOpportunities query:', err);
            return callback(err);
          }
          callback(null, results);
        });
      }
}


module.exports = Opportunity;