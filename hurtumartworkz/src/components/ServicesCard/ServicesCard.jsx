import React from 'react'
import { useNavigate } from "react-router-dom";
import "./servicesCard.css"


const ServicesCard = ({image, title, page}) => {

    let navigate = useNavigate() 
    const routeChange = () =>{ 
        navigate(page)
    }

    return (
        <span className="services">
            <img src={image} alt="Service" className="service-image" />
            <h2> {title}</h2>
            <button onClick={routeChange} className='service-button'> Explore </button>
        </span>
    )
}

export default ServicesCard