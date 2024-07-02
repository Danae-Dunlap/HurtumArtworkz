import React from 'react'
import { useNavigate } from "react-router-dom";
import "./ServicesCard.css"


const ServicesCard = ({image, title, page}) => {

    let navigate = useNavigate() 
    const routeChange = () =>{ 
        navigate(page)
    }

    return (
        <div className="services">
            <img src={image} alt="Service" className="service-image" />
            <h2> {title}</h2>
            <button onClick={routeChange} className='service-button'> Explore </button>
        </div>
    )
}

export default ServicesCard