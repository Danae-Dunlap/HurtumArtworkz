/***
 * import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="pt-[70px] relative max-w-full mx-auto overflow-hidden text-center">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -translate-y-1/2 left-3 bg-white border-none text-white p-2 cursor-pointer text-sm"
      >
        ◀
      </button>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full max-h-[500px] object-cover"
      />
      <button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-3 bg-white border-none text-white p-2 cursor-pointer text-sm"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
***/
import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative max-w-full mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
      >
        ◀
      </button>

      {/* Carousel Image */}
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full max-h-[500px] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Check Out Our Amazing Works
        </h2>
        <button className="bg-green-600 text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-green-700">
          Shop Now
        </button>
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;

