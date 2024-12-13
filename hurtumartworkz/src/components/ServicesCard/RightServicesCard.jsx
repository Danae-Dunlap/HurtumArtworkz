import React from 'react';
import { Link } from 'react-router-dom';

const RightServicesCard = ({image, title, page, description }) => {
  return (
    <div className="flex items-center justify-between p-8 animate-fade-up">
    {/* Left Image Section */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Service"
          className="float-left w-fit h-auto object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold leading-tight text-neutral-950 text-right font-Poppins">
          {title}
        </h2>
        <p className="text-lg mt-4 leading-relaxed text-neutral-900 pl-3 text-right font-Poppins">
          {description}
        </p>
        <Link to={page}>
          <button className="font-Poppins mt-6 px-5 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 float-right h-fit">
            Explore
          </button>
        </Link>
      </div>

    
    </div>
  );
};

export default RightServicesCard;
