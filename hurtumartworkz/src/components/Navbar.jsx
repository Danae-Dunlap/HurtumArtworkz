import { useState } from 'react'
import  styles from './Navbar.module.css'
import logo from "../images/logo.png"

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}> <img src={logo} alt="Hurtnum Logo"></img></a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='../pages/index.js' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/services.js' className={`${styles.navLink}`}>Service</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/about.js' className={`${styles.navLink}`}>About Us</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/about.js' className={`${styles.navLink}`}>Contact Us</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;