import React from "react"

const Catalog = ({image, title, price, isAvailable}) => {

    return(
        <div>
            <span className="catalog">
            <img src={image} alt="option" className="service-image" />
            <h2> {title}</h2>

            {isAvailable == true && 
                <div>
                    <h4>{price}</h4>
                    <button  className='service-button'> Buy Now </button>
                </div>  
            }
            
        </span>
        </div>
    ); 

}

export default Catalog; 