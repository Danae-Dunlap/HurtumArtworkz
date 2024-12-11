import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-6xl font-bold mb-8">Contact Us</h2>
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
          placeholder="Message"
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-200 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/4 p-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
