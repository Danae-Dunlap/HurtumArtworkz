import React from "react"
import Bookings from "../../components/Bookings/Bookings"
import Footer from "../../components/Footer/Footer"; 

function Murals() {
    const title = "Get a Mural"
    const description = "Come up with some description"

    return (<div>
        <Bookings title = {title} description={description} />
        <Footer />
    </div>);

}; 
  
export default Murals;