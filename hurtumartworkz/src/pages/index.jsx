import React from "react"; 
import Footer from "../components/Footer/footer"; 
import Carousel from "../components/Carousel/carousel"
import ContactForm from "../components/Contact/contact"
import "./index.css"

function Home (){

  const images = [
      'https://via.placeholder.com/800x400.png?text=Slide+1',
      'https://via.placeholder.com/800x400.png?text=Slide+2',
      'https://via.placeholder.com/800x400.png?text=Slide+3'
  ]
  
  return(
    <div>
      <div>
        <Carousel images={images} interval={3000}/>
        <h1> Check Out Our Amazing Works</h1>
        <button className="index_button">Shop Now</button>
      </div>
      <div>
        <h2 className="index-h2">The Most Authentic Pieces For the Most Authentic Prices</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat voluptate omnis veniam animi reprehenderit sequi quod officia cumque porro quia tempora laudantium facilis nobis quis quibusdam ipsum voluptas exercitationem illum debitis delectus blanditiis vero, error accusantium. Nemo iusto enim labore quaerat sequi neque quod laudantium, quia quis, error iure.</p>
      </div>

      <div>
        <div>
          <h2 className="index-h2">5</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2 className="index-h2">100</h2>
          <p>Pieces Sold</p>
        </div>
        <button className="index_button">Learn More</button>
      </div>
      <div>
        <h1>Contact Us</h1>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;