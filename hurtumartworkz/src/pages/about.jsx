import React from "react"; 
import Footer from "../components/Footer/Footer"; 
import Reviews from "../components/Reviews/Reviews";

import "./About.css"

function About(){
  return(
  <div>
    <span className="about">
      <h1>Our Story</h1>
      <img className="founder-img" src="https://via.placeholder.com/800x400.png?text=Slide+1" alt="Founders"/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, atque! Earum, odio? Quis nulla impedit corrupti. Repellat ad cumque magni eum at eius, molestiae, minima quaerat eveniet fugiat voluptas, deleniti delectus inventore consequatur omnis reiciendis hic dolor atque nam quod repudiandae. Commodi vel quod consequatur rem necessitatibus voluptatibus provident dolore?</p>
      <button>Support Us</button>
    </span>

    <div>
    <h1> Reviews </h1>
      <span className="reviews">
        <Reviews message="Wow they were so great and amazing! Would try again!" user="User 1" rating={4} />
        <Reviews message="OMG give them all you money NOW!" user="User 2" rating={5} />
        <Reviews message="They were horrible and I hated them" user="User 3" rating={1} />
      </span>
    </div>

    <Footer/>
  </div>
  );
};

export default About;