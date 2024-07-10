import  styles from './bookings.module.css';
import React from "react"; 

const Bookings = (title, description) => {
    return(
        <div className="bookings">
            <title>{title}</title>
            <p>{description}</p>

            <h4>Choose a time that works for you</h4>

            <h4>Choose one of our options</h4>
            {"Create an option component"}
        
        <button>Book</button>
        <form>
            <label> Name</label>
            <input className='booking-input' type='text'/> <br />
            <label> Email</label>
            <input className='booking-input' type='email'/> <br />
            <label>Phone Number</label>
            <input className='booking-input' type='time'/> <br />
        </form>
   
        </div>
    ); 


}

export default OptionsPage; 