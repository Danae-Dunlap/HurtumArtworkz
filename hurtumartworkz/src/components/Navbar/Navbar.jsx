import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({clicked, isClicked}) {

  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked")
  };
  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          <Link style={{textDecoration:'none', color:'white'}} to="/">
            Hurtnum Artworkz
          </Link>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/services">
            Contact Us
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
}

export default Navbar;