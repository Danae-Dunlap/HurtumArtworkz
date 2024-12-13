import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);  // New state for dropdown
  const [dropdownTimer, setDropdownTimer] = useState(null); // Timer to delay hiding the dropdown

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer); // Clear the timer if mouse re-enters before the delay
    }
    setShowDropdown(true);  // Show dropdown immediately on hover
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowDropdown(false);  // Hide dropdown after a short delay
    }, 300);  // Adjust delay time here (in ms)

    setDropdownTimer(timer); // Store the timer to clear it if needed
  };

  return (
    <nav className="h-[70px] bg-[#00923d] shadow-sm top-0 w-full z-10">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Hurtnum logo" className="h-[40px]" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden cursor-pointer" onClick={handleShowNavbar}>
          <Hamburger size={24} />
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative left-0 w-full md:w-auto md:flex md:items-center md:space-x-8 ${
            showNavbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row list-none md:space-x-8 text-[16px] font-medium font-Poppins">
            <li className="group">
              <NavLink
                to="/"
                className="text-black hover:text-[#fcfcfc] transition font-Poppins"
                activeClassName="text-[#00923d] font-medium font-Poppins"
              >
                Home
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>
            </li>
            <li className="group">
              <NavLink
                to="/about"
                className="text-black hover:text-[#fcfcfc] transition font-Poppins"
                activeClassName="text-[#00923d] font-medium"
              >
                About Us
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>
            </li>
            {/* Services Dropdown */}
            <li
              className="group relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/services"
                className="text-black hover:text-[#fcfcfc] transition font-Poppins"
                activeClassName="text-[#00923d] font-medium font-Poppins"
              >
                Services
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute left-0 w-max bg-white shadow-lg mt-2 rounded-lg">
                  <NavLink
                    to="/party"
                    className="block px-4 py-2 text-black hover:bg-[#00923d] hover:text-white font-Poppins"
                    activeClassName="text-[#00923d] font-medium font-Poppins"
                  >
                    Paint Parties
                  </NavLink>
                  <NavLink
                    to="/merch"
                    className="block px-4 py-2 text-black hover:bg-[#00923d] hover:text-white font-Poppins"
                    activeClassName="text-[#00923d] font-medium font-Poppins"
                  >
                    Custom Apparel
                  </NavLink>
                  <NavLink
                    to="/murals"
                    className="block px-4 py-2 text-black hover:bg-[#00923d] hover:text-white font-Poppins"
                    activeClassName="text-[#00923d] font-medium font-Poppins"
                  >
                    Murals
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    className="block px-4 py-2 text-black hover:bg-[#00923d] hover:text-white font-Poppins"
                    activeClassName="text-[#00923d] font-medium font-Poppins"
                  >
                    Original Artwork
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
