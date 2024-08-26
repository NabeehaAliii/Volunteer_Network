import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginForm from './Pages/Login/LoginForm';
import SignupForm from './Pages/Signup/SignupForm';
import Home from './Pages/Home/Home';
import RegisterOrganization from './Pages/RegisterOrganization/RegisterOrganization';
import OrganizationList from './Pages/OrganizationList/OrganizationList';
import PostOpportunity from './Pages/PostOpportunity/PostOpportunity';
import DonationForm from './Pages/Donation/Donation';
import Footer from './components/Footer';
import Cookies from 'js-cookie';
import axios from 'axios';
import Opportunities from './Pages/Opoortunities/Volunteer_Opportunities';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authToken = Cookies.get('Token');
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/volunteer_network/auth/signout');
      Cookies.remove('Token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <AppRoutes isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
    </Router>
  );
}

function AppRoutes({ isLoggedIn }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />}/>
      <Route path="/signout" element={<Navigate to="/" />} />
      <Route path="/registerorganization" element={<RegisterOrganization />} />
      <Route path="/organizations" element={<OrganizationList />} />
      <Route path='/opportunities' element={<Opportunities />} />
      <Route path="/donation" element={<DonationForm />} />
      <Route path="/postopportunity" element={<PostOpportunity />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
