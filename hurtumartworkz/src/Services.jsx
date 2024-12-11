import React from "react"
import ServicesCard from "./components/ServicesCard/ServicesCard"
import Footer from "./components/Footer/Footer"

function Services(){
  return(
  <div className="items-center">
    <h1 className="text-5xl font-bold mb-2 leading-tight px-2 justify-center text-center py-3">Check Out Our Services</h1>

    <p className="pt-7 px-7 pb-3 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus vel culpa sint maiores nam reprehenderit, ratione modi mollitia aliquid sit magni eos accusamus. Consectetur, debitis vel iusto molestias quibusdam modi praesentium perferendis vitae nemo cumque ipsa rem nisi velit hic id laboriosam sunt labore nihil aut distinctio voluptatem culpa exercitationem ea harum! Non earum rem facere perferendis officia veritatis quo labore cum facilis reiciendis illum, modi omnis ad accusamus dolorem quisquam dolore, placeat iste iure ratione nulla? Reprehenderit aut quidem laborum sapiente incidunt? Cupiditate unde quasi ratione. Pariatur ab odit magni maxime labore quos harum obcaecati rem cumque consequatur.</p>

    <div class="m-auto table">
      <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'/party'} />
      <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'/murals'} />
      <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'/merch'} />
      <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'/gallery'} />
    </div>

    <Footer />
    
</div>  
);
};

export default Services; 