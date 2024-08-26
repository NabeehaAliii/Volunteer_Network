import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3001/volunteer_network/user/signup', {
                name,
                username,
                email,
                password,
                confirmPassword
            });
            console.log('Signup successful:', response);
            // Clear form fields
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } catch (error) {
            if (error.response) {
                console.error('Signup error:', error.response.data.message);
                setError(error.response.data.message || 'Signup failed. Please try again later.');
            } else {
                console.error('Signup error:', error.message);
                setError('Signup failed. Please try again later.');
            }
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full py-10 px-5 space-y-4 bg-white rounded-2xl lg:w-full md:w-2/3 sm:w-11/12">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-0 mb-10">Register Yourself</h2>
                <form className="space-y-9" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="lg:flex lg:items-center">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className='lg:flex lg:items-center'>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>

                        <div className='lg:flex lg:items-center'>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className='lg:flex lg:items-center'>
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
                        <div className='lg:flex lg:items-center'>
                            <label htmlFor="confirmpassword" className="sr-only">Confirm Password</label>
                            <input
                                id="confirmpassword"
                                name="confirmpassword"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>

                    </div>
                    <div>
                        <button type="submit" className="group relative justify-center w-full py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Register
                        </button>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className='flex justify-center'>
                        <p className='text-gray-400'>Already Register? <a href='/login' className='text-red-500'>Login</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
}
