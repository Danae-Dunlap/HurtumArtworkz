import React from "react"
import ServicesCard from "../components/ServicesCard/servicesCard"
import Footer from "../components/Footer/footer"
import "./services.css"



function Services(){
  return(
  <div className="services-page">
    <title>Services</title>
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'./services/party.js'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'./services/murals.js'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'./services/merch.js'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'./services/gallery.js'} />
222155d5fb68fbd9e78747ea7c3554
    <Footer />
</div>  
);
};

export default Services; 