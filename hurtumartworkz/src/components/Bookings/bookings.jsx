import React from "react"; 

const Bookings = ({title, description}) => {
    return(
        <div className="items-center">
        {/** Opening Section */}
          <h1 className="text-5xl text-center font-medium py-3 justify-center my-2">{title}</h1>
          <p className="text-lg mt-4 leading-relaxed text-black px-3">{description}</p>

          <h4 className="text-3xl text-center font-medium py-3 justify-center my-2">Choose a time that works for you</h4>

          {/** Create an option component*/}
          <h4 className="text-3xl text-center font-medium py-3 justify-center my-2">Choose one of our options</h4>
          
        
      {/* Temporary Form */}
      <div className="flex flex-col items-center justify-center py-12">
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
        {/* Phone Number Input */}
        <label for="default-input" class="block text-2xl text-black font-semibold">Phone Number</label>
        <input
          placeholder="Message"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          required
        ></input>
        {/* Submit Button */}
        <button
          type="submit"
          className="block w-1/4 p-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 justify-center"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
    ); 


}

export default Bookings; 