import React from "react"
import Bookings from '../../components/Bookings/bookings'

function Party() {
    const title = "Host a Paint Party"
    const description = "Our custom paint parties are know for ......."

    return (
    <div>
        <Bookings title = {title} description={description} />
    </div>);

}; 
  
export default Party;