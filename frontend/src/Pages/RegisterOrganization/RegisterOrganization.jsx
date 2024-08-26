import React, { useState } from 'react';
import axios from 'axios';

const RegisterOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    org_id: '',
    location: '',
    country: '',
    contact: '',
    mission: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the API call
    axios.post('http://localhost:3001/volunteer_network/organizations', formData)
      .then(response => {
        console.log('Organization registered:', response.data);
        // Clear form fields
        setFormData({
          name: '',
          org_id: '',
          location: '',
          country: '',
          contact: '',
          mission: ''
        });
        setSuccessMessage('Organization registered successfully.');
        setErrorMessage('');
      })
      .catch(error => {
        console.error('There was an error registering the organization!', error);
        setErrorMessage('There was an error registering the organization.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-0 mb-10">Claim your Organization</h2>
        <div className="mb-4">
          <label className="block  text-gray-700">Organization Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Organization ID</label>
          <input
            type="text"
            name="org_id"
            value={formData.org_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mission</label>
          <textarea
            name="mission"
            value={formData.mission}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterOrganization;
