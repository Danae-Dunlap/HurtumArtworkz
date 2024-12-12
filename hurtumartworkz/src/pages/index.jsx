import React from "react";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/Contact/Contact";

function Home() {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];

  return (
    <div className="space-y-12">
      <div>
        <Carousel images={images} interval={3000} />
      </div>
      
    <div className="flex items-center justify-between px-8 py-12">
    {/* Text Section */}
    <div className="w-2/3">
      <h2 className="text-4xl font-bold leading-tight">
        The Most Authentic Pieces <br /> For the Most Authentic Prices
      </h2>
      <p className="text-lg mt-4 leading-relaxed text-gray-600">
      At Hurtnum Artworks, creativity runs in the family. As a family-owned art studio, we pour our passion for self-expression into every piece we create. From custom apparel and stunning paintings to vibrant murals and unforgettable paint parties, we bring art to life in a way that’s meaningful and personal. Whether you’re here to find a unique masterpiece, host a creative gathering, or add a splash of color to your world, Hurtnum Artworks is where artistry meets community. Let’s create something beautiful together!
      </p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700">
        Learn More
      </button>
      {/* Metrics */}
      <div className="flex gap-12 mt-8">
        <div>
          <h2 className="text-5xl font-bold text-gray-800">5</h2>
          <p className="text-lg text-gray-600">Years Experience</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-gray-800">100</h2>
          <p className="text-lg text-gray-600">Pieces Sold</p>
        </div>
      </div>
    </div>

  {/* Image Section */}
  <div className="w-1/3">
    <div className="w-full h-[300px] bg-blue-100 rounded-lg flex items-center justify-center">
      {/* Replace with actual image or SVG */}
      <div className="w-3/4 h-3/4 bg-green-200 rounded-full"></div>
    </div>
  </div>
</div>

      <div className="text-center">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
