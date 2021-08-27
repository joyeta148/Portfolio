import React from 'react';
import Footer from "./footer";

const Contact = () => {

    return (
        <div className="contact">
            <div className="container">
                <h3 className="heading">Contacts</h3>
                <h1 className="mainHeading">Want to contact me, drop a text down or email me to:</h1>
                <p className="mainContent">joyetasaha148@gmail.com</p>

                <div className="contactMe">
                  <div className="row">
                    <div className="col-6">
                      <img src="./images/contact-me.jpg" alt="contact me" width="450px" height="400px"/>
                    </div>
                    <div className="col-6">
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
                      
                    </div>
                  </div>
                </div>
                <hr/><br/><br/>
            </div>
            <Footer />
        </div>
        
    )
}

export default Contact 
