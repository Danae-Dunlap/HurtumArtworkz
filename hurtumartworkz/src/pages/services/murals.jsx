import React from "react"
import Bookings from "../../components/Bookings/Bookings"
import Footer from "../../components/Footer/Footer"; 

function Murals() {
    const title = "Get a Mural"
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non fuga nemo totam fugit optio. Officiis ea autem animi vel."

    return (<div>
        <Bookings title = {title} description={description} />
        <Footer />
    </div>);

}; 
  
export default Murals;