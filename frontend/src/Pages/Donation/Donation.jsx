import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    donor_phone: '',
    amount: '',
    screenshot: null
  });
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null); // Reference to the file input element

  useEffect(() => {
    // Fetch the list of organizations when the component mounts
    axios.get('http://localhost:3001/volunteer_network/organizations')
      .then(response => {
        setOrganizations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the organizations!', error);
      });
  }, []);

  const handleOrganizationChange = (e) => {
    setSelectedOrganization(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const organization = organizations.find(org => org.name === selectedOrganization);
    if (organization) {
      const data = new FormData();
      data.append('donor_name', formData.donor_name);
      data.append('donor_email', formData.donor_email);
      data.append('donor_phone', formData.donor_phone);
      data.append('amount', formData.amount);
      data.append('organization_id', organization.id);
      if (formData.screenshot) {
        data.append('screenshot', formData.screenshot);
      } else {
        setMessage('Please attach a screenshot of the payment.');
        setTimeout(() => {
          setMessage('');
        }, 3000);
        return;
      }

      axios.post('http://localhost:3001/volunteer_network/donations', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Donation registered:', response.data);
        setFormData({
          donor_name: '',
          donor_email: '',
          donor_phone: '',
          amount: '',
          screenshot: null
        });
        setSelectedOrganization('');
        fileInputRef.current.value = ''; // Clear the file input
        setMessage('Donation successful!');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('There was an error registering the donation!', error);
        setMessage('There was an error registering the donation. Please try again.');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
    } else {
      setMessage('Selected organization not found!');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className='bg-blue-50 min-h-screen flex justify-center items-center'>
      <div className="max-w-md w-full mx-4 p-10 bg-white rounded-2xl shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-0 mb-6">Make a Donation</h2>
        <p className="text-center font-semibold text-lg mb-6">Bank Account Number <br />IBAN: PK 35 HABB 10626699120</p>
        <p className="text-center font-semibold text-lg mb-6">EasyPaisa Number: 03082629314</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <select
              value={selectedOrganization}
              onChange={handleOrganizationChange}
              className="w-full p-2 rounded-md py-2 bg-gray-200"
              required
            >
              <option value="">Select an organization</option>
              {organizations.map(org => (
                <option key={org.id} value={org.name}>{org.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="donor_name"
              placeholder="  Full Name"
              onChange={handleChange}
              value={formData.donor_name}
              className="input w-full bg-gray-200 rounded-md py-1"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="donor_phone"
              placeholder="  Phone Number"
              onChange={handleChange}
              value={formData.donor_phone}
              className="input w-full bg-gray-200 rounded-md py-1"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="donor_email"
              placeholder="  Email"
              onChange={handleChange}
              value={formData.donor_email}
              className="input w-full bg-gray-200 rounded-md py-1"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="amount"
              placeholder="  Payment Amount (PKR)"
              onChange={handleChange}
              value={formData.amount}
              className="input w-full bg-gray-200 rounded-md py-1"
              required
            />
          </div>
          <p className='py-1'>Attach Screenshot</p>
          <div className="mb-4">
            <input
              type="file"
              name="screenshot"
              accept="image/*"
              onChange={handleChange}
              className="input"
              ref={fileInputRef}
              required
            />
          </div>
          <button type="submit" className="group relative justify-center w-full py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit Donation
          </button>
        </form>
        {message && <p className="text-center text-stone-600 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default DonationForm;
