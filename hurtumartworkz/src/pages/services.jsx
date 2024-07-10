import React from "react"
import ServicesCard from "../components/ServicesCard/ServicesCard"
import Footer from "../components/Footer/footer"
import "./services.css"



function Services(){
  return(
  <div className="services-page">
    <title>Services</title>

    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'./filler'}  />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'./filler'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'./filler'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'./filler'} />
    <Footer />
</div>  
);
};

export default Services; 