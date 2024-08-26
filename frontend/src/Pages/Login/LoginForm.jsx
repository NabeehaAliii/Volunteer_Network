import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const [email, setEmailname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmailname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:3001/volunteer_network/user/login', {
        email,
        password,
      });
  
      // Check if authentication was successful based on response status
      if (response.status === 200) {

        const token = response.data.token; // Assuming the token is in the response data
        Cookies.set('Token', token, { /* add cookie options if needed */ });
        setSuccessMessage('Authentication successful');
        setError('');
        window.location = "/";
        
      } else {
        // Authentication failed
        setError('Authentication failed');
        setSuccessMessage('');
      }
    } catch (error) {
      // If an error occurs, display error message
      if (error.response) {
        setError(error.response.data.message || 'Authentication failed');
      } else {
        setError('Authentication failed');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full py-10 px-5 space-y-4 bg-white rounded-2xl lg:w-full md:w-2/3 sm:w-11/12">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-0 mb-10">Login to your Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='mb-4 lg:flex lg:items-center'>
              <label htmlFor="username" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='mb-4 lg:flex lg:items-center'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <div>
            <button type="submit" className="group relative justify-center w-full py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
          <div className='flex justify-center'>
            <p className='text-gray-400'>Not a Member? <a href='/signup' className='text-red-500'>Signup now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
