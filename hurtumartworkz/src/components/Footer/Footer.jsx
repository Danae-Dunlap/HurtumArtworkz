import React from "react"
import instagram from "../../images/socials/instagram.png"
import facebook from "../../images/socials/facebook.png"
import youtube from "../../images/socials/youtube.png"
import twitter from "../../images/socials/twitter.png"

const Footer = () => {
    return (
     

<footer class="bg-[#fcfcfc]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      {/*<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />*/}
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-black sm:text-center">© 2024 <a href="#" class="hover:underline">Hurtnum™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img class="w-10 h-10" aria-hidden="true" src={facebook} alt="facebook logo" fill="currentColor" viewBox="0 0 21 16"/>
              <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <img class="w-10 h-10" aria-hidden="true" src={instagram}  alt="instagram logo" fill="currentColor" viewBox="0 0 21 16"/>
                  <span class="sr-only">Instagram community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img class="w-10 h-10" aria-hidden="true" src={twitter} alt="twitter logo" fill="currentColor" viewBox="0 0 21 16"/>
              <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img class="w-10 h-10" aria-hidden="true" src={youtube} alt="youtube logo" fill="currentColor" viewBox="0 0 21 16"/>
              <span class="sr-only">Youtube page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

);
};

export default Footer;