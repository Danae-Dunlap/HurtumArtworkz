import React from "react"
import Bookings from "../../components/Bookings/bookings"

function Murals() {
    const title = "Get a Mural"
    const description = "Come up with some description"

    return (<div>
        <Bookings title = {title} description={description} />
    </div>);

}; 
  
export default Murals;