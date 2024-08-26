import axios from 'axios';

export const checkAuthStatus = async () => {
  try {
    const response = await axios.get('http://localhost:3001/volunteer_network/user/checkAuth');
    console.log('Authenticated:', response.data.authenticated);
    if (response.data.authenticated) {
      console.log('User:', response.data.user);
    }
  } catch (error) {
    console.error('Error checking authentication status:', error);
  }
};
