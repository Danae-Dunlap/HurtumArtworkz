import React from "react"
import Bookings from '../../components/Bookings/Bookings'
import Footer from "../../components/Footer/Footer"; 

function Party() {
    const title = "Host a Paint Party"
    const description = "Our custom paint parties are know for ......."

    return (
    <div>
        <Bookings title={title} description={description} />
        <Footer />
    </div>);

}; 
  
export default Party;