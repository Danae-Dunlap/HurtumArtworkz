import React from "react"; 
import Footer from "../components/Footer/Footer"; 
import Carousel from "../components/Carousel/Carousel"
import Reviews from "../components/Reviews/Reviews";
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
        <h2>The Most Authentic Pieces For the Most Authentic Prices</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat voluptate omnis veniam animi reprehenderit sequi quod officia cumque porro quia tempora laudantium facilis nobis quis quibusdam ipsum voluptas exercitationem illum debitis delectus blanditiis vero, error accusantium. Nemo iusto enim labore quaerat sequi neque quod laudantium, quia quis, error iure.</p>
        <button className="index_button">Learn More</button>
      </div>

      <div>
        <div>
          <h2>5</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2>100</h2>
          <p>Pieces Sold</p>
        </div>
      </div>
      <h1> Reviews </h1>
      <span className="reviews">
        <Reviews message="Wow they were so great and amazing! Would try again!" user="User 1" rating={4} />
        <Reviews message="OMG give them all you money NOW!" user="User 2" rating={5} />
        <Reviews message="They were horrible and I hated them" user="User 3" rating={1} />
      </span>

      <div>
        <h1>Contact Us</h1>
        <form>
          <label className="contact-label">Name</label><br/>
          <input className="contact-input" type="text"/><br/>
          <label className="contact-label">Email</label><br/>
          <input className="contact-input" type="text"/><br/>
          <label className="contact-label">Message</label> <br/>
          <input className="contact-message" type="text"/> <br/>
          <input type="submit" className="submit_button"/> <br/>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;