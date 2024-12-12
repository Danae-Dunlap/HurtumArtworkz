import React from "react"
import Bookings from '../../components/Bookings/Bookings'
import Footer from "../../components/Footer/Footer"; 

function Party() {
    const title = "Host a Paint Party"
    const description = "Make your next gathering unforgettable with Hurtnum Artworks’ Paint Parties! Whether you're planning an adult 'paint and drank' night full of fun and creativity or a family-friendly session perfect for all ages, we’ve got you covered. We take care of everything—from setting up to cleaning up—so you can focus on enjoying the experience. Our step-by-step guidance ensures that everyone, no matter their skill level, leaves with a masterpiece and lasting memories. Perfect for birthdays, celebrations, team-building events, or just because—let us bring the art and the party to you!"


    return (
    <div>
        <Bookings title={title} description={description} />
        <Footer />
    </div>);

}; 
  
export default Party;