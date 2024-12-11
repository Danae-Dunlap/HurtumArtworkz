import React from "react"
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer"; 

function Merch() {

    return (<div>
        <h1 className="text-5xl text-center font-medium py-3 justify-center my-2"> Look at our current works</h1> 
        <div className="grid grid-cols-3 justify-center items-center">
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        </div>

        <h1 className="text-5xl text-center font-medium py-3 justify-center my-2"> Look at our past works </h1>
        <div className="grid grid-cols-3 justify-center items-center">
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={false}/>
        </div>

        {/*Temporary Form*/}
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-6xl font-bold mb-8">Make a Request</h2>
      <form className="w-full max-w-xl space-y-4">
        {/* Name Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Email Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold">Email</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Message Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold">Message</label>
        <textarea
          placeholder="Give us a brief description & how many of each size you'll need."
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
         {/* Quantity Input */}
         <label for="default-input" class="block text-2xl text-black font-semibold">Quantity</label>
        <input
          placeholder="0"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          min={1}
          max={100}
          required
        ></input>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/4 p-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
        
        <Footer />
    </div>);

}; 
  
export default Merch;
