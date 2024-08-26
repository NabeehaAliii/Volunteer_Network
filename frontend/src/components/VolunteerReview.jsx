import React from 'react';
import { FaBeer } from 'react-icons/fa';

const VolunteerReview = () => {
  return (
    <div className='relative h-screen md:shrink-0 md:h-{900px} w-full bg-center flex items-center justify-center' style={{ backgroundImage: "url('/Images/nonprofits-hero-low_2x.webp')", backgroundSize: 'cover' }}>
      <div className='grid grid-cols-2 gap-9 px-8 md:px-9'>
        <blockquote className="hp-np__txt-quote text-md md:text-2xl font-medium text-gray-800 italic border-l-2 md:border-l-2 border-gray-500 pl-2 py-2">
          "It's a portal for volunteers to connect with the nonprofits, and in a way, it's its own search engine specifically for volunteer opportunities."
        <figcaption className="hp-np__txt-q-caption text-sm md:text-sm  text-gray-600">
          <cite>
            <div>DANIEL MARLAY,</div>
            <div>MAKE-A-WISH GREATER BAY AREA</div>
            <h3> Lets go for a <FaBeer /></h3>
          </cite>
        </figcaption>
        </blockquote>
      </div>
    </div>
  );
};

export default VolunteerReview;
