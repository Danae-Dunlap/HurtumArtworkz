import React from 'react';
import { Link } from 'react-router-dom';

const LeftServicesCard = ({ image, title, page, description }) => {
  return (
    <div className="flex items-center justify-between px-8 py-12">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col">
        <h2 className="text-4xl font-bold leading-tight">
          {title}
        </h2>
        <p className="text-lg mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
        <Link to={page}>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700">
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
