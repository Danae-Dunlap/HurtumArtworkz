import React from "react"
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer"; 

function Merch() {

    return (<div>
        <h1> Look at our current works</h1> 
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>

        <h1> Look at our past works </h1>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>

        <h1> Make a request</h1>
        <form>
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <label>Quantity</label>
            <input type="range"/>
            <label>Brief Description</label>
            <input type="text" />
        </form>

        <Footer />
    </div>);

}; 
  
export default Merch;