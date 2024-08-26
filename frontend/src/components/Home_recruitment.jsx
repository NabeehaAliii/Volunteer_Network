import React from 'react';

const VolunteerMatchBanner = () => {
  return (
    <div className="bg-slate-100 py-16 px-8 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">VolunteerNetwork recruiting solutions for nonprofits</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Get connected to qualified volunteers when and where you need them.</p>
        <p className="text-lg md:text-xl text-gray-700 mb-12">With more volunteers and more volunteer opportunities than any other service, VolunteerNetwork is how good people and good causes get connected.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          <a href="/signup">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default VolunteerMatchBanner;
