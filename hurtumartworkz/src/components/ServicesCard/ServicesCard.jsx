import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ image, title, page }) => {
    return (
        <span className="m-auto w-[250px] h-[500px] px-5 inline-block overflow-hidden text-center">
            <img src={image} alt="Service" className="m-auto pt-24 w-[200px] h-[300px]" />
            <h2 className="pt-5 pb-2 text-[25px] font-medium">{title}</h2>
            <Link to={page}>
                <button className="w-[100px] h-[40px] bg-[#00923d] rounded-[5px] border-0 text-white text-lg">
                    Explore
                </button>
            </Link>
        </span>
    );
};

export default ServicesCard;
