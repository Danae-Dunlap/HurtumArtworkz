import React from "react"; 
import {Nav, NavLink, NavMenu} from "./NavElements.jsx"; 


const Navbar = () => {
    return (
      <>
      <Nav>
        <NavMenu>
        <NavLink to="../pages/index.js" activeStyle>
          Home
          </NavLink>
          <NavLink to="../pages/about.js" activeStyle>
          About
          </NavLink>
          <NavLink to="../pages/services.js" activeStyle>
          Services
          </NavLink>
        
        </NavMenu>
      </Nav>
      </>

    );
  };

export default Navbar;
