import React from "react"
import ServicesCard from "../components/ServicesCard/ServicesCard"
import Footer from "../components/Footer/Footer"
import "./services.css"



function Services(){
  return(
  <div className="services-page">
    <title>Services</title>

    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'./services/party'}  />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'./services/murals'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'./services/merch'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'./services/gallery'} />
    <Footer />
</div>  
);
};

export default Services; 