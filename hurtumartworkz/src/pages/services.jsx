import React from "react"
import ServicesCard from "../components/ServicesCard/servicesCard"
import Footer from "../components/Footer/footer"
import { Link } from "react-router-dom"; 

import "./services.css"




function Services(){
  return(
  <div className="services-page">
    <title>Services</title>

    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'/party'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'/murals'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'/merch'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'/gallery'} />
  

    <Footer />
    
</div>  
);
};

export default Services; 