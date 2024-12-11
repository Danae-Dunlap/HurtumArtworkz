import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="h-[70px] bg-[#fcfcfc] shadow-sm top-0 w-full z-10">
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
          className={`absolute md:relative left-0 w-full md:w-auto bg-[#fcfcfc] md:flex md:items-center md:space-x-8 ${
            showNavbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row list-none md:space-x-8 text-[16px] font-medium">
            <li className="group">
              <NavLink
                to="/"
                className="text-black hover:text-[#00923d] transition"
                activeClassName="text-[#00923d] font-medium"
              >
                Home
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>
            </li>
            <li className="group">
              <NavLink
                to="/about"
                className="text-black hover:text-[#00923d] transition"
                activeClassName="text-[#00923d] font-medium"
              >
                About Us
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>
            </li>
            <li className="group">
              <NavLink
                to="/services"
                className="text-black hover:text-[#00923d] transition"
                activeClassName="text-[#00923d] font-medium"
              >
                Services
              </NavLink>
              <div className="h-[2px] w-0 bg-[#00923d] group-hover:w-full transition-all"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
