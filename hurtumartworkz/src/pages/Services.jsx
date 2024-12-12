import React from "react"
import LeftServicesCard from "../components/ServicesCard/LeftServicesCard"
import RightServicesCard from "../components/ServicesCard/RightServicesCard"
import Footer from "../components/Footer/Footer"

const sampleDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo natus blanditiis quisquam ex, quo quas eius voluptas aliquam nam."

function Services(){
  return(
  <div className="items-center">
    <h1 className="text-5xl font-bold mb-2 leading-tight px-2 justify-center text-center py-3 mt-3">Check Out Our Services</h1>

    <p className="pt-3 px-7 pb-3 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus vel culpa sint maiores nam reprehenderit, ratione modi mollitia aliquid sit magni eos accusamus. Consectetur, debitis vel iusto molestias quibusdam modi praesentium perferendis vitae nemo cumque ipsa rem nisi velit hic id laboriosam sunt labore nihil aut distinctio voluptatem culpa exercitationem ea harum! Non earum rem facere perferendis officia veritatis quo labore cum facilis reiciendis illum, modi omnis ad accusamus dolorem quisquam dolore, placeat iste iure ratione nulla? Reprehenderit aut quidem laborum sapiente incidunt? Cupiditate unde quasi ratione. Pariatur ab odit magni maxime labore quos harum obcaecati rem cumque consequatur.</p>

    <div>
      <LeftServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'/party'} description={sampleDescription}/>
      <RightServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'/murals'} description={sampleDescription}/>
      <LeftServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'/merch'} description={sampleDescription} />
      <RightServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'/gallery'}  description={sampleDescription}/>
    </div>

    <Footer />
    
</div>  
);
};

export default Services; 