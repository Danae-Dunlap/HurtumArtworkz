import React from 'react';
import { Link } from 'react-router-dom';

const RightServicesCard = ({ image, title, page, description }) => {
  return (
    <div className="flex items-center justify-between px-8 py-12">
    {/* Left Image Section */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Service"
          className="float-left w-fit h-auto object-cover px-3"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col float-right">
        <h2 className="text-4xl font-bold leading-tight text-right">
          {title}
        </h2>
        <p className="text-lg mt-4 leading-relaxed text-gray-600 text-right">
          {description}
        </p>
        <Link to={page}>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 float-right">
            Explore
          </button>
        </Link>
      </div>

    
    </div>
  );
};

export default RightServicesCard;
