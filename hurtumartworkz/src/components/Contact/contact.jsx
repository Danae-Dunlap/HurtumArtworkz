import React from 'react';

const ContactForm = () => {
  return (
    <section class="bg-white">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
    {/**Form Section*/}
    <form action="#" class="space-y-8">
        {/**Name Input*/}
        <div>
            <label for="name" class="block mb-2 text-lg font-medium text-gray-900">Name</label>
            <input type="text" id="name" class="block p-3 w-full text-gray-900 text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
        </div>
        {/**Email Input */}
        <div>
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900">Email</label>
            <input type="email" id="email" class="block p-3 w-full text-gray-900 text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
        </div>
        {/**Subject Line Input*/}
        <div>
            <label for="subject" class="block mb-2 text-lg font-medium text-gray-900">Subject</label>
            <input type="text" id="subject" class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
        </div>
        {/**Email Body Input */}
        <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-lg font-medium text-gray-900">Message</label>
            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" class="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
    </form>
</div>
</section>);
};

export default ContactForm;
