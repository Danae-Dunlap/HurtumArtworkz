import React from "react"
import LeftServicesCard from "../components/ServicesCard/LeftServicesCard"
import RightServicesCard from "../components/ServicesCard/RightServicesCard"
import Footer from "../components/Footer/Footer"

const partyDescrip = "Gather your friends, family, or coworkers and unleash your inner artist! Our paint parties are a fun, guided experience where you can create your own masterpiece in a relaxed, supportive environment. Perfect for celebrations, team-building events, or just a night of creative fun."

const muralsDescrip = "Transform your space with a custom mural designed to make a lasting impression. From vibrant contemporary designs to striking urban art, we’ll work with you to bring your vision to life on walls big or small."

const apparelDescrip = "Wear your art with pride! Whether it’s personalized designs or one-of-a-kind pieces, our custom apparel combines creativity with style to help you stand out and express yourself."

const paintDescrip = "From captivating canvas paintings to stunning mixed-media pieces, our traditional artwork blends contemporary and urban styles to create art that resonates with all audiences. Perfect for adding personality and character to any space."

function Services(){
  return(
  <div className="items-center min-h-screen">
    {/**Opening Section*/}
    <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 text-neutral-950 text-center font-Poppins">Check Out Our Services</h1>

    <p className="text-lg mt-4 leading-relaxed text-neutral-900 py-2.5 mr-5 text-center font-Poppins px-16">Whether you're looking for a one-of-a-kind piece that tells your story, a statement artwork that becomes the focal point of a room, or a custom design that reflects your individual taste, Hurtnum Artworks offers a diverse range of services to meet your needs. Our custom creations are designed with you in mind, ensuring that every piece is a perfect reflection of your vision, personality, and style.<br />
    At Hurtnum Artworks, every creation reflects our love for art and our commitment to making it something everyone can enjoy. We strive to make art something everyone can enjoy, appreciate, and incorporate into their everyday lives, creating pieces that not only beautify spaces but also enrich the experiences of those who interact with them. Whether you're looking to make memories, add flair to your surroundings, or express yourself in a unique way, we’re here to help you bring the picture in your head to paper.
    </p>

    {/**Services Section */}
    <div>
      <LeftServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'/party'} description={partyDescrip}/>
      <RightServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'/murals'} description={muralsDescrip}/>
      <LeftServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'/merch'} description={apparelDescrip} />
      <RightServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'/gallery'}  description={paintDescrip}/>
    </div>

    <Footer />
    
</div>  
);
};

export default Services; 