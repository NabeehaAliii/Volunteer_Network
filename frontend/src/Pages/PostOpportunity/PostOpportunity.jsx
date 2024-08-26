import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostOpportunity = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [causes, setCauses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [location, setLocation] = useState('');
  const [objective, setObjective] = useState('');
  const [type, setType] = useState('In-Person');
  const [title, setTitle] = useState(''); // Add this line
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const organizationsResponse = await axios.get('http://localhost:3001/volunteer_network/organizations');
        const causesResponse = await axios.get('http://localhost:3001/volunteer_network/causes');
        const skillsResponse = await axios.get('http://localhost:3001/volunteer_network/skills');
        setOrganizations(organizationsResponse.data);
        setCauses(causesResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      organization: selectedOrganization,
      causes: selectedCauses,
      skills: selectedSkills,
      location,
      objective,
      type,
      title, // Add this line
    };
    
    console.log('Posting data:', postData); // Add this line to log the data being sent
    
    try {
      const response = await axios.post('http://localhost:3001/volunteer_network/opportunities', postData);
      setMessage('Opportunity posted successfully');
      setTimeout(() => setMessage(''), 3000);
      setSelectedOrganization('');
      setSelectedCauses([]);
      setSelectedSkills([]);
      setLocation('');
      setObjective('');
      setType('In-Person');
      setTitle(''); // Add this line
    } catch (error) {
      console.error('Error posting opportunity:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
        if (error.response.data.message === 'Organization does not exist') {
          console.error('Organization does not exist.');
        }
      } else {
        setMessage('Error posting opportunity');
        console.error('Error posting opportunity.');
      }
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Post a Volunteer Opportunity</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Organization Name</label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)}
              required
            >
              <option value="" disabled>Select Organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Title</label> {/* Add this block */}
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Causes</label>
            <select
              multiple
              className="w-full p-2 border rounded-md"
              value={selectedCauses}
              onChange={(e) =>
                setSelectedCauses(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              {causes.map((cause) => (
                <option key={cause.id} value={cause.id}>
                  {cause.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Skills Needed</label>
            <select
              multiple
              className="w-full p-2 border rounded-md"
              value={selectedSkills}
              onChange={(e) =>
                setSelectedSkills(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Type</label>
            <select
              className="w-full p-2 border rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option className='font-bold' value="In-Person">In-Person</option>
              <option className='font-bold' value="Virtual">Virtual</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4"> 
            <label className="block font-bold text-gray-700">Objective</label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-semibold bg-blue-500 text-white p-2 rounded-md"
          >
            Post Opportunity
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-green-500">{message}</div>
        )}
      </div>
    </div>
  );
};

export default PostOpportunity;
