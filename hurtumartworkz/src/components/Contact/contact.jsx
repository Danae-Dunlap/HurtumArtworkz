import React from 'react';

const ContactForm = () => {
  return (
  <div class="w-full h-full mx-auto py-4 px-4 animate-fade-up">
    <div class="flex flex-wrap">

      <div class="w-full lg:w-5/12 px-4 mt-12 lg:mt-0">
        <div>
          <div>
            <h2 class="text-5xl font-bold leading-tight text-neutral-950 font-Poppins pb-2">Contact us</h2>
            <p class="text-neutral-900 font-Poppins">Let us know what's on your mind.</p>
          </div>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <img class="w-10 h-10" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone"/>
              <p class="text-neutral-800 font-Poppins">+1258 3258 5679</p>
            </div>
            <div class="flex items-center space-x-4">
              <img class="w-10 h-10" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email"/>
              <p class="text-neutral-800 font-Poppins">hello@workik.com</p>
            </div>
            <div class="flex items-center space-x-4">
              <img class="w-10 h-10" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Address"/>
              <p class="text-neutral-800 font-Poppins">102 street, y cross 485656</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-7/12 border-b lg:border-b-0 lg:border-l border-gray-300 px-4">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2" for="first-name">FIRST NAME</label>
              <input type="text" id="first-name" name="FirstName" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"/>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2" for="last-name">LAST NAME</label>
              <input type="text" id="last-name" name="LastName" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"/>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2" for="email">EMAIL</label>
              <input type="email" id="email" name="Email" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"/>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2" for="phone">PHONE NUMBER</label>
              <input type="tel" id="phone" name="PhoneNumber" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"/>
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2" for="message">WHAT DO YOU HAVE IN MIND</label>
            <textarea id="message" name="Message" rows="6" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500" placeholder="Please enter your query..."></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="mt-6 px-6 py-2 ml-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default ContactForm;