import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center text-white text-center gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Volunteer Network</h1>
        <p className="text-sm md:text-lg md:max-w-lg">"Empowering communities through volunteerism - Volunteer Network"</p>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-400"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-white hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-white hover:text-gray-400"><FontAwesomeIcon icon={faGooglePlusG} /></a>
          <a href="#" className="text-white hover:text-gray-400"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#" className="text-white hover:text-gray-400"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>
      </div>
      <div className="bg-gray-600 py-2 w-full text-white text-center">
        <p className="text-sm">Copyright &copy; 2022 CodeOpacity. Design By NETHUNT</p>
      </div>
    </footer>
  );
}

export default Footer;
