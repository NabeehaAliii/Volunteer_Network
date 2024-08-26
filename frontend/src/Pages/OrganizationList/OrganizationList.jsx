import React, { useState} from 'react';
import axios from 'axios';

const OrganizationList = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [organizations, setOrganizations] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:3001/volunteer_network/organizations/location?location=${searchLocation}`)
      .then(response => {
        setOrganizations(response.data);
      })
      .catch(error => console.error('Error fetching organizations:', error));
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Search Organizations by Location</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder="Enter location"
          className="p-2 border rounded"
        />
        <button onClick={handleSearch}
        className="wl-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Search
        </button>
      </div>
      <div className="space-y-4">
        {organizations.length > 0 ? (
          organizations.map(org => (
            <div key={org.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{org.name}</h2>
              <p><strong>ID:</strong> {org.org_id}</p>
              <p><strong>Location:</strong> {org.location}</p>
              <p><strong>Country:</strong> {org.country}</p>
              <p><strong>Contact:</strong> {org.contact}</p>
              <p><strong>Mission:</strong> {org.mission}</p>
            </div>
          ))
        ) : (
          <p>No organizations found!!</p>
        )}
      </div>
      <div className="flex justify-center py-6">
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
               <a href="/registerorganization">Claim Your Organization</a> 
              </button>
        </div>
    </div>
    
  );
};

export default OrganizationList;
