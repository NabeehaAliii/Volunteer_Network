import React from 'react';
import axios from 'axios';

const SignOutComponent = ({ setIsLoggedin, setMessage }) => {
    const handleSignOut = async () => {
        try {
            await axios.post('http://localhost:3001/volunteer_network/auth/signout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            localStorage.removeItem('token');
            setMessage('Signed out successfully');
            setIsLoggedin(false);
        } catch (error) {
            console.error('Error signing out:', error);
            setMessage('Error signing out');
        }
    };

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
};

export default SignOutComponent;
