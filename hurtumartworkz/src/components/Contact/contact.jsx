import React from 'react'

const ContactForm = () => {
    return(
        <form className='contact-form'>
          <label className="contact-label">Name</label><br/>
          <input className="contact-input" type="text"/><br/>
          <label className="contact-label">Email</label><br/>
          <input className="contact-input" type="text"/><br/>
          <label className="contact-label">Message</label> <br/>
          <input className="contact-message" type="text"/> <br/>
          <input type="submit" className="submit_button"/> <br/>
        </form>
    );

}
export default ContactForm; 