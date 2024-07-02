import React from "react"; 
import Footer from "../components/Footer/Footer"; 
import Carousel from "../components/Carousel/Carousel"


function Home (){

  const images = [
      'https://via.placeholder.com/800x400.png?text=Slide+1',
      'https://via.placeholder.com/800x400.png?text=Slide+2',
      'https://via.placeholder.com/800x400.png?text=Slide+3'
  ]
  
  return(
    <div>
      <div>
        <h1> Check Out Our Amazing Works</h1>
        <Carousel images={images} interval={3000}/>
        <button>Shop Now</button>
      </div>
      <div>
        <h2>The Most Authentic Pieces For the Most Authentic Prices</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat voluptate omnis veniam animi reprehenderit sequi quod officia cumque porro quia tempora laudantium facilis nobis quis quibusdam ipsum voluptas exercitationem illum debitis delectus blanditiis vero, error accusantium. Nemo iusto enim labore quaerat sequi neque quod laudantium, quia quis, error iure.</p>
        <button>Learn More</button>
      </div>

      <div>
        <div>
          <h2>5</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2>100</h2>
          Pieces Sold
        </div>
      </div>

      <div>
        <h1>Contact Us</h1>
        <form>
          <label>Name</label><br/>
          <input type="text"/><br/>
          <label>Email</label><br/>
          <input type="text"/><br/>
          <label>Message</label> <br/>
          <input type="text"/> <br/>
          <input type="submit"/> <br/>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;