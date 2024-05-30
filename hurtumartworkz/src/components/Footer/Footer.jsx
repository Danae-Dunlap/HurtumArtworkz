import  styles from './Footer.module.css';
import React from "react"

function Footer(){
    return(
        <div className='App'>
        <footer className={`${styles.footer}`}>
            <div className='Footer-logo'>
                <p className={`${styles.logo}`}>Hurtnum Artworkz</p>
            </div>

            <div className='Footer-socials'>

            </div>

        </footer>

        </div>
    );
}; 
export default Footer;