import React from 'react';
import { BiCheck} from 'react-icons/bi';
import DonateButton from './DonateButton';

const BackgroundWithTextOverlay = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Images/Homebackgroundpic1.jpg')" }}>
      <div className="fixed bottom-4 right-4">
          <DonateButton />
        </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center">Volunteer Network</h1>
        <p className="text-xl lg:text-2xl text-center mb-8">"Empowering communities through volunteerism - Volunteer Network"</p>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-md">
          <div className="relative flex items-center">
          
            <BiCheck className="absolute right-0 mr-3" size={33}  style={{ color: 'orange' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundWithTextOverlay;
