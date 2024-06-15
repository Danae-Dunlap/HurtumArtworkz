import React from "react"
import styles from './Footer.css'
import logo from "../../images/logo.png"
import instagram from "../../images/socials/instagram.png"
import facebook from "../../images/socials/facebook.png"
import youtube from "../../images/socials/youtube.png"
import twitter from "../../images/socials/twitter.png"
function Footer(){
    return(
        <div className='App'>
        <footer className={`${styles.footer}`}>
            <div className="logo">
            <a href='#home' className={`${styles.logo}`}> <img src={logo} alt="Hurtnum Logo"></img></a>
                <ul className={`${styles.socialMedia}`}>
                    <li><img src={instagram} alt="Instagram Logo" className={`${styles.socials}`}/></li>
                    <li><img src={facebook} alt="Facebook Logo" className={`${styles.socials}`}/></li>
                    <li><img src={youtube} alt="Youtube Logo" className={`${styles.socials}`}/></li>
                    <li><img src={twitter} alt="Twitter Logo" className={`${styles.socials}`}/></li>
                </ul>
                <p>@ Hurtnum Artworkz 2024</p>
            </div>
        </footer>
        </div>
    );
}; 
export default Footer;