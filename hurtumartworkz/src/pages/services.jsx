import React from "react"
import ServicesCard from "../components/ServicesCard/ServicesCard"
import Navbar from "../components/Navbar/Navbar"

function Services(){
  return(
  <div className="services-page">
    <title>Services</title>

    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Paint Parties"} page={'../services.jsx'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Murals"} page={'../services.jsx'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Custom Tees"} page={'../services.jsx'} />
    <ServicesCard image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Original Pieces"} page={'../services.jsx'} />
</div>  
);
};

export default Services; 