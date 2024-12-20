import React from "react";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";
import './Timeline.css'; 

function About() {
  return (
    <div className="min-h-screen">
      {/*About Us Section*/}
      <div className="flex items-center justify-between p-8">
        <div className="w-3/5">
          <h1 className="text-5xl font-bold leading-tight p-2.5 text-neutral-950 font-Poppins">Our Story</h1>
        
          <p className="text-lg mt-4 leading-relaxed text-neutral-900 p-2.5 mr-5 font-Poppins">
          Hurtnum Artworks is more than just an art business—it’s a passion project built on love, creativity, and community. Founded by husband-and-wife duo Jay and Jonae McCoy, Hurtnum Artworks combines the artistic talents of Jay with the business acumen of Jonae to create a brand that celebrates the beauty of self-expression. <br />
          Jay’s journey as an artist began in high school, where his passion for creating art grew into a lifelong dedication. Over the years, his skills have evolved from painting and murals to custom apparel and much more. In 2019, the McCoys took a leap of faith and officially trademarked Hurtnum Artworks, turning Jay’s dream into a thriving business. <br />
          While Jay brings bold, vibrant ideas to life through his artwork, Jonae ensures the vision of Hurtnum Artworks runs smoothly, connecting with clients and fostering relationships that turn creativity into opportunity. Together, they’ve built a family-owned brand that’s as personal as it is professional.
          At Hurtnum Artworks, every creation is crafted with care, passion, and a commitment to making art accessible and enjoyable for all.
          </p>
          <button className="mt-6 px-6 py-3 ml-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 font-Poppins">
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
      <div className="text-center font-Poppins bg-[#f6f6f6] animate-fade-up">
        <h1 className="text-5xl font-bold leading-tight p-2.5 text-neutral-950 mb-4 font-Poppins">Our History</h1>
        <section class="timeline">
          <div class="container">
          
          {/**Item 1 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content animate-fade-left">
                <h2 className="font-Poppins">Founding</h2>
                <p className="font-Poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div> 

            {/**Item 2*/}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content animate-fade-right">
                <h2 className="font-Poppins">Growth Expansion</h2>
                <p className="font-Poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div>   

            {/**Item 3 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content animate-fade-left">
                <h2 className="font-Poppins">Major Achievements</h2>
                <p className="font-Poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div> 

            {/**Item 4 */}
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content animate-fade-right">
                <h2 className="font-Poppins">Recent Milestones</h2>
                <p className="font-Poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              </div>
            </div>   
          </div>
        </section>
      </div>

      {/**Review Section*/}
      <div className="text-center">
        <h1 className="text-5xl font-bold leading-tight p-2.5 text-neutral-950 font-Poppins animate-fade-up">Reviews</h1>
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
