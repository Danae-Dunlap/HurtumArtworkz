import React from "react";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/Contact/Contact";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Carousel Section */}
      <div>
        <Carousel images={images} interval={3000} />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow items-center justify-between px-8 py-4">
        {/* Text Section */}
        <div className="w-3/5">
          <h2 className="text-5xl font-bold leading-tight p-2.5 text-neutral-950 font-Poppins">
            The Most Authentic Pieces <br /> For the Most Authentic Prices
          </h2>
          <p className="text-lg mt-4 leading-relaxed text-neutral-900 p-2.5 mr-5 font-Poppins">
            At Hurtnum Artworks, creativity runs in the family. As a family-owned art studio, we pour our passion for self-expression into every piece we create. From custom apparel and stunning paintings to vibrant murals and unforgettable paint parties, we bring art to life in a way that’s meaningful and personal. Whether you’re here to find a unique masterpiece, host a creative gathering, or add a splash of color to your world, Hurtnum Artworks is where artistry meets community. Let’s create something beautiful together!
          </p>
          <Link to="/about">
            <button className="mt-6 px-6 py-3 ml-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700">
              Learn More
            </button>
          </Link>
          {/* Metrics */}
          <div className="flex gap-12 mt-8 ml-3">
            <div>
              <h2 className="text-5xl font-bold text-neutral-950 font-Poppins">5</h2>
              <p className="text-lg text-neutral-900 font-Poppins">Years Experience</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-neutral-950 font-Poppins">100</h2>
              <p className="text-lg text-neutral-900 font-Poppins">Pieces Sold</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-2/5">
          <div className="w-full h-[400px] bg-blue-100 rounded-lg flex items-center justify-center">
            {/* Replace with actual image or SVG */}
            <div className="w-3/4 h-3/4 bg-green-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex-grow h-full bottom-0 bg-[#f6f6f6] animate-fade-up">
        <ContactForm />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
