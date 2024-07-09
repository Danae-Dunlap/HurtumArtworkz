import React from "react"
import './Footer.css'
import logo from "../../images/logo.png"
import instagram from "../../images/socials/instagram.png"
import facebook from "../../images/socials/facebook.png"
import youtube from "../../images/socials/youtube.png"
import twitter from "../../images/socials/twitter.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" />
                </div>
                <div className="footer-social-media">
                    <ul className = "footer-social-media-list">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-social-media-img" src={facebook} alt="facebook logo"></img>
                    </a> </li>.
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-social-media-img" src={twitter} alt="twitter logo"></img>
                    </a> </li>.
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-social-media-img" src={youtube} alt="youtube logo"></img>
                    </a> </li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-social-media-img" src={instagram} alt="instagram logo"></img>
                    </a>
                    </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;