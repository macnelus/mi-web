import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Contact = () => {
  return (
    <>
      <Header />
      <main id="contact">
        <form className="form">
          <div className="form-control">
            <label>Name</label>
            <input id="name" type="text" />
          </div>
          <div className="form-control">
            <label>email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label className="box">Message</label>
            <textarea className="box" id="message" type="textarea" />
          </div>

          <div className="btn">Send</div>
          
        </form>

        
        <div className="map">
          <h1>Contact</h1>
          <p>social media</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
