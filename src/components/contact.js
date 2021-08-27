import React from 'react';
import Footer from "./footer";

const Contact = () => {

    return (
        <div className="contact">
            <div className="container">
                <h3 className="heading">Contacts</h3>
                <h1 className="mainHeading">Want to contact me or drop a text can email me to my id:</h1>
                <p className="mainContent">joyetasaha148@gmail.com</p>

                <div className="contactForm">
      <h3>Send Message</h3>
      <div className="inputBox">
        <input type="text" placeholder="Name" />
      </div>
      <div className="inputBox">
        <input type="text" placeholder="Email" />
      </div>
      <div className="inputBox">
        <textarea placeholder="Message"></textarea>
      </div>
      <div className="inputBox">
        <input type="submit" placeholder="Send" />
      </div>

    </div>
                <hr/>
            </div>
            <Footer />
        </div>
        
    )
}

export default Contact 
