import React from "react"; 

const Bookings = ({title, description}) => {
    return(
        <div className="items-center">
        {/** Opening Section */}
          <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 font-Poppins text-neutral-950 text-center">{title}</h1>
          <p className="text-lg mt-4 leading-relaxed font-Poppins text-neutral-900 py-2.5 mr-5 text-center px-16">{description}</p>

          <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 font-Poppins text-neutral-950 text-center">Choose a time that works for you</h1>

          {/** Create an option component*/}
          <h1 className="text-5xl font-bold leading-tight p-2.5 mt-5 font-Poppins text-neutral-950 text-center">Choose one of our options</h1>
          
        
      {/* Temporary Form */}
      <div className="flex flex-col items-center justify-center py-12">
        <form className="w-full max-w-xl space-y-4">
        {/* Name Input */}
        <label for="default-input" class="block text-2xl font-Poppins text-black font-semibold">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 font-Poppins text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Email Input */}
        <label for="default-input" class="block text-2xl font-Poppins text-black font-semibold">Email</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 font-Poppins text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Phone Number Input */}
        <label for="default-input" class="block text-2xl font-Poppins text-black font-semibold">Phone Number</label>
        <input
          placeholder="Message"
          className="w-full p-4 border border-gray-300 font-Poppins rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          required
        ></input>
        {/* Submit Button */}
        <button
          type="submit"
          className="block w-1/4 p-4 bg-green-600 font-Poppins text-white text-lg font-semibold rounded-lg hover:bg-green-700 justify-center"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
    ); 


}

export default Bookings; 