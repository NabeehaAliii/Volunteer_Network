import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerOpportunities = () => {
  const [location, setLocation] = useState('');
  const [causes, setCauses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [selectedCauses, setSelectedCauses] = useState('');
  const [selectedSkills, setSelectedSkills] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    // Fetch initial data for causes and skills
    const fetchData = async () => {
      try {
        const causesResponse = await axios.get('http://localhost:3001/volunteer_network/causes');
        const skillsResponse = await axios.get('http://localhost:3001/volunteer_network/skills');
        setCauses(causesResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!location || !type || !selectedCauses || !selectedSkills) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/volunteer_network/opportunities/getFilteredOpportunities', {
        params: {
          location,
          cause: selectedCauses,
          skill: selectedSkills,
          type,
        },
      });

      setOpportunities(response.data);
      // Clear the form
      setLocation('');
      setType('');
      setSelectedCauses('');
      setSelectedSkills('');
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Filter Section */}
      <form onSubmit={handleFilterSubmit} className="bg-blue-500 p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <input
              type="radio"
              name="type"
              value="In-Person"
              className="form-radio h-5 w-5 text-orange-600"
              checked={type === 'In-Person'}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <span className="ml-2 text-white">In-Person</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="type"
              value="Virtual"
              className="form-radio h-5 w-5 text-orange-600"
              checked={type === 'Virtual'}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <span className="ml-2 text-white">Virtual</span>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
          <select
            className="w-full p-2 rounded-md"
            value={selectedCauses}
            onChange={(e) => setSelectedCauses(e.target.value)}
            required
          >
            <option value="">Cause Areas</option>
            {causes.map((cause) => (
              <option key={cause.id} value={cause.id}>{cause.name}</option>
            ))}
          </select>
          <select
            className="w-full p-2 rounded-md"
            value={selectedSkills}
            onChange={(e) => setSelectedSkills(e.target.value)}
            required
          >
            <option value="">Skills</option>
            {skills.map((skill) => (
              <option key={skill.id} value={skill.id}>{skill.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-1/4 bg-orange-600 text-white p-2 rounded-md focus:bg-orange-400 outline-none"
        >
          Search
        </button>
      </form>

      {/* Opportunities List Section */}
      <div>
        {opportunities.length === 0 ? (
          <div className="text-center text-gray-700">No Opportunities Available</div>
        ) : (
          opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold text-orange-600">{opportunity.title}</h2>
              <p className="text-gray-700">
                <span className="font-semibold">Organization:</span> {opportunity.organization_name}, {opportunity.location}
              </p>
              <p className="text-gray-700">{opportunity.objective}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Date Posted:</span> {new Date(opportunity.datePosted).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center py-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          <a href="/postopportunity">Provide Opportunity</a>
        </button>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
