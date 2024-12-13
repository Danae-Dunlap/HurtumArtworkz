import React from 'react';
import { Link } from 'react-router-dom';

const LeftServicesCard = ({ image, title, page, description }) => {
  return (
    <div className="flex items-center justify-between px-8 py-8 bg-[#f6f6f6] animate-fade-up">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold leading-tight text-neutral-950 font-Poppins">
          {title}
        </h2>
        <p className="text-lg mt-4 leading-relaxed text-neutral-900 pr-3 font-Poppins">
          {description}
        </p>
        <Link to={page}>
          <button className="mt-6 px-5 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 h-fit font-Poppins">
            Explore
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Service"
          className="float-right w-fit h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default LeftServicesCard;
