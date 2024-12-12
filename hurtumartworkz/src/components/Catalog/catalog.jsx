import React from "react";

const Catalog = ({ image, title, price, isAvailable }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-6 text-center">
        
        {/* Catalog Item */}
        <div className="flex flex-col items-center justify-center p-2 border rounded-lg shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-lg font-semibold mt-4">{title}</h2>
          {isAvailable && (
            <div className="mt-4">
              <h4 className="text-lg font-medium">{price}</h4>
              <button className="w-[100px] h-[40px] bg-[#00923d] rounded-[5px] border-0 text-white text-lg mt-2">
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
