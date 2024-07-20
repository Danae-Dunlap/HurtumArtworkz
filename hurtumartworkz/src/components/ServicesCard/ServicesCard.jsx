import React from 'react'
import { useNavigate } from "react-router-dom";
import "./servicesCard.css"
import { Link } from 'react-router-dom';


const ServicesCard = ({image, title, page}) => {

    return (
        <span className="services">
            <img src={image} alt="Service" className="service-image" />
            <h2> {title}</h2>
            <Link to={page}>
                <button className='service-button'> Explore </button>
            </Link>
        </span>
    )
}

export default ServicesCard