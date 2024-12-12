import React from "react";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";
import './Timeline.css'; 

function About() {
  return (
    <div>
      {/*About Us Section*/}
      <div className="flex items-center justify-between px-8 py-12">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold mb-2 leading-tight px-2">Our Story</h1>
        
          <p className="text-lg mt-4 leading-relaxed text-black px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, atque! Earum, odio? Quis nulla impedit corrupti.
            Repellat ad cumque magni eum at eius, molestiae, minima quaerat eveniet fugiat voluptas, deleniti delectus inventore
            consequatur omnis reiciendis hic dolor atque nam quod repudiandae. Commodi vel quod consequatur rem necessitatibus
            voluptatibus provident dolore?
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700">
            Support Us
          </button>
        </div>
      <div className="w-2/5">
          <img
            className="w-full h-[400px] mx-auto"
            src="https://via.placeholder.com/800x400.png?text=Slide+1"
            alt="Founders" 
          />
        </div>
      </div>
    
      {/**History Section */}
      <div className="text-center  mt-12">
        <h1 className="text-4xl font-bold mb-6">Our History</h1>
        <section class="timeline">
          <div class="container">
          
          {/**Item 1 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInLeft">
                <h2>Founding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div> 

            {/**Item 2*/}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInRight">
                <h2>Growth Expansion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div>   

            {/**Item 3 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInLeft">
                <h2>Major Achievements</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div> 

            {/**Item 4 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInRight">
                <h2>Recent Milestones</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div>   
          
          </div>
        </section>
      </div>
      {/**Review Section*/}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold mb-6">Reviews</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <Reviews
            message="Wow they were so great and amazing! Would try again!"
            user="User 1"
            rating={4}
          />
          <Reviews
            message="OMG give them all your money NOW!"
            user="User 2"
            rating={5}
          />
          <Reviews
            message="They were horrible and I hated them"
            user="User 3"
            rating={1}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
