import React from "react"
import Bookings from "../../components/Bookings/Bookings"
import Footer from "../../components/Footer/Footer"; 

function Murals() {
    const title = "Get a Mural"
    const description = "Transform your space with a stunning mural from Hurtnum Artworks. Whether it’s a bold statement piece or a subtle accent, we specialize in turning your dreams into reality.From conceptualization to execution, we work with you to create a personalized masterpiece that brings your vision to life. Our murals combine contemporary and urban art styles, adding depth, creativity, and individuality to any setting—be it a home, business, or public space.Let us turn your walls into a captivating story that inspires and amazes!"

    return (<div>
        <Bookings title = {title} description={description} />
        <Footer />
    </div>);

}; 
  
export default Murals;