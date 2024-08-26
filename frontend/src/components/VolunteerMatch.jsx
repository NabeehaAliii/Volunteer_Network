import React from 'react';
import { FaUnity, FaPaw, FaMusic, FaChild } from 'react-icons/fa';

const VolunteerOpportunities = () => {
  return (
    <div className="bg-gray-100 h-96 flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Find The Best Volunteer Opportunities</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-2">
            <FaUnity size={24} color="white" />
          </div>
          <p>Advocacy & Human Rights (5)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-2">
            <FaPaw size={24} color="white" />
          </div>
          <p>Animals (7)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-2">
            <FaMusic size={24} color="white" />
          </div>
          <p>Arts & Culture (3)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-2">
            <FaChild size={24} color="white" />
          </div>
          <p>Children & Youth (2)</p>
        </div>
        {/* Add similar divs for other categories */}
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
