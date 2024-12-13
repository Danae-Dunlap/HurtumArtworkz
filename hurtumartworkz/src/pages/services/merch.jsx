import React from "react"
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer"; 

function Merch() {

    return (<div>
      {/**Opening Section */}
        <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 text-neutral-950 text-center font-Poppins"> Get Custom Apparel</h1>
        <p className="text-lg mt-4 leading-relaxed text-neutral-900 py-2.5 mr-5 text-center px-16 font-Poppins"> Wear your individuality with pride through Hurtnum Artworks’ handcrafted apparel! Each design is a unique blend of creativity and craftsmanship, made to stand out and reflect your personal style. <br />
        From T-shirts and hoodies to hats and more, we bring your vision to life on any item. Every piece is hand-designed with care and a flair for originality, ensuring no two creations are ever the same.
        Discover wearable art that’s as bold, dynamic, and unique as you are!
        </p>

        {/**Current Work Gallery Section */}
        <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 text-neutral-950 text-center font-Poppins"> Look at our current works</h1> 

        <div className="grid grid-cols-3 justify-center items-center">
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Merch"} price={"10.99"} isAvailable={true}/>
        </div>

         {/**Current Gallery Section*/}
         <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 text-neutral-950 text-center font-Poppins"> Look at our Past Works</h1> 
        <div className="grid grid-cols-3 justify-center items-center">
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Painting"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Painting"} price={"10.99"} isAvailable={true}/>
        <Catalog image={'https://via.placeholder.com/800x400.png?text=Slide+3'} title={"Generic Painting"} price={"10.99"} isAvailable={true}/>
        </div>

        {/*Temporary Form*/}
      <div className="flex flex-col items-center justify-center p-2.5">
      <h2 className="text-6xl font-bold mb-8 font-Poppins">Make a Request</h2>
      <form className="w-full max-w-xl space-y-4">
        {/* Name Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold font-Poppins">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Email Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold font-Poppins">Email</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Message Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold font-Poppins">Message</label>
        <textarea
          placeholder="Give us a brief description & how many of each size you'll need."
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
         {/* Quantity Input */}
         <label for="default-input" class="block text-2xl text-black font-semibold font-Poppins">Quantity</label>
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
          className="w-1/4 p-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 font-Poppins"
        >
          Submit
        </button>
      </form>
    </div>
        
        <Footer />
    </div>);

}; 
  
export default Merch;
